import {
  Route53Client,
  Route53ClientConfig,
  ChangeResourceRecordSetsCommand,
  ChangeResourceRecordSetsCommandInput,
} from '@aws-sdk/client-route-53';
import { ApiResponseStatusEnum } from '~/utils/enums/ApiResponseStatusEnum';
import { AppConfig } from '~/config';

const config: Route53ClientConfig = {
  region: AppConfig.AWS_REGION,
  credentials: {
    accessKeyId: AppConfig.AWS_ACCESS_KEY,
    secretAccessKey: AppConfig.AWS_SECRET_ACCESS_KEY,
  },
};

type RecordOperationType = {
  assignedSubDomain: string;
  actionType: 'CREATE' | 'DELETE';
  hostedZoneId: string;
  customDomainAlias?: string;
};

const RecordOperation = async ({
  assignedSubDomain,
  actionType,
  hostedZoneId,
  customDomainAlias,
}: RecordOperationType) => {
  try {
    if (!actionType) throw new Error('Action type must be defined');

    const client = new Route53Client(config);

    const TTL = !customDomainAlias ? 300 : undefined;

    const ResourceRecords = !customDomainAlias
      ? [
          {
            Value: AppConfig.EC2_INSTANCE_IP_ADDRESS,
          },
        ]
      : undefined;

    const AliasTarget = customDomainAlias
      ? {
          DNSName: customDomainAlias,
          EvaluateTargetHealth: false,
          HostedZoneId: hostedZoneId,
        }
      : undefined;

    const input: ChangeResourceRecordSetsCommandInput = {
      ChangeBatch: {
        Changes: [
          {
            Action: actionType,
            ResourceRecordSet: {
              Name: assignedSubDomain,
              TTL,
              Type: 'A',
              ResourceRecords,
              AliasTarget,
            },
          },
        ],
      },
      HostedZoneId: hostedZoneId,
    };

    const command = new ChangeResourceRecordSetsCommand(input);

    const k = await client.send(command);
    console.log(k);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * @param {string} assignedSubDomain - The subdomain for the URL
 */

export const createHostedZoneRecord = async (
  assignedSubDomain: string,
  hostedZoneId?: string,
  customDomainAlias?: string
) => {
  try {
    await RecordOperation({
      assignedSubDomain,
      actionType: 'CREATE',
      hostedZoneId: hostedZoneId || AppConfig.AWS_ROUTE53_HOSTED_ZONE_ID,
      customDomainAlias,
    });

    return {
      status: ApiResponseStatusEnum.SUCCESS,
      message: 'Hosted Zone record created',
    };
  } catch (err) {
    return {
      status: ApiResponseStatusEnum.FAILED,
      message: 'Failed to create hosted zone record',
    };
  }
};

export const deleteHostedZoneRecord = async (
  assignedSubDomain: string,
  hostedZoneId?: string,
  customDomainAlias?: string
) => {
  try {
    await RecordOperation({
      assignedSubDomain,
      actionType: 'DELETE',
      hostedZoneId: hostedZoneId || AppConfig.AWS_ROUTE53_HOSTED_ZONE_ID,
      customDomainAlias,
    });

    return {
      status: ApiResponseStatusEnum.SUCCESS,
      message: 'Hosted Zone record deleted',
    };
  } catch (err) {
    return {
      status: ApiResponseStatusEnum.FAILED,
      message: 'Failed to deleted hosted zone record',
    };
  }
};
