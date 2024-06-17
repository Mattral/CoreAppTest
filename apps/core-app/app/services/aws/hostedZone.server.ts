import {
  Route53Client,
  CreateHostedZoneCommand,
  DeleteHostedZoneCommand,
  GetHostedZoneCommand,
  Route53ClientConfig,
  ListResourceRecordSetsCommand,
} from '@aws-sdk/client-route-53';
import { AppConfig } from '~/config';
import { generateRandomString } from '~/utils/generateRandomString.utils';
import { ApiResponseStatusEnum } from '../../utils/enums/ApiResponseStatusEnum';
import {
  createHostedZoneRecord,
  deleteHostedZoneRecord,
} from './hostedZoneRecord.server';

const config: Route53ClientConfig = {
  region: AppConfig.AWS_REGION,
  credentials: {
    accessKeyId: AppConfig.AWS_ACCESS_KEY,
    secretAccessKey: AppConfig.AWS_SECRET_ACCESS_KEY,
  },
};

export const createHostedZone = async (customDomain: string) => {
  try {
    const client = new Route53Client(config);

    const input = {
      CallerReference: generateRandomString(),
      Name: customDomain,
    };

    const command = new CreateHostedZoneCommand(input);
    const response = await client.send(command);
    const hostedZoneId = response.HostedZone?.Id as string;

    const recordPromises = await Promise.allSettled([
      await createHostedZoneRecord(customDomain, hostedZoneId),
      await createHostedZoneRecord(
        `www.${customDomain}`,
        hostedZoneId,
        customDomain
      ),
    ]);

    if (
      recordPromises[0].status !== 'fulfilled' ||
      recordPromises[0].value.status === ApiResponseStatusEnum.SUCCESS ||
      recordPromises[1].status !== 'fulfilled' ||
      recordPromises[1].value.status === ApiResponseStatusEnum.SUCCESS
    ) {
      await deleteHostedZone(hostedZoneId);

      return {
        status: ApiResponseStatusEnum.FAILED,
        message: 'Failed to create hosted zone',
      };
    }

    return {
      status: ApiResponseStatusEnum.SUCCESS,
      hostedZoneId,
      nameServers: response?.DelegationSet?.NameServers,
    };
  } catch (error) {
    console.log(error);
    return {
      status: ApiResponseStatusEnum.FAILED,
      message: 'Failed to create hosted zone',
    };
  }
};

export const deleteHostedZone = async (hostedZoneId: string) => {
  try {
    const client = new Route53Client(config);

    // Get all records on the zone
    const getHostedZoneRequest = { HostedZoneId: hostedZoneId };
    const getHostedZoneRecordsCommand = new ListResourceRecordSetsCommand(
      getHostedZoneRequest
    );
    const getHostedZoneRecords = await client.send(getHostedZoneRecordsCommand);

    for (const record of getHostedZoneRecords.ResourceRecordSets || []) {
      if (record.Type === 'NS' || record.Type === 'SOA') continue;

      await deleteHostedZoneRecord(
        record.Name || '',
        hostedZoneId,
        record.AliasTarget?.DNSName || undefined
      );
    }

    // Delete custom domain
    const input = {
      Id: hostedZoneId,
    };

    const command = new DeleteHostedZoneCommand(input);
    await client.send(command);

    return {
      status: ApiResponseStatusEnum.SUCCESS,
      message: 'Hosted Zone deleted',
    };
  } catch (error) {
    console.log(error);
    return {
      status: ApiResponseStatusEnum.FAILED,
      message: 'Failed to deleted hosted zone',
    };
  }
};
