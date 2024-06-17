import { AxiosInstance } from '~/utils/axios.utils';
import { isAxiosError } from 'axios';
import { ApiResponseStatusEnum } from '../../utils/enums/ApiResponseStatusEnum';
import { AppConfig } from '../../config';

interface PropsInterface {
  companyName: FormDataEntryValue | string;
  companyLogo: FormDataEntryValue | string;
  assignedSubDomain: FormDataEntryValue | string;
  siteCode: FormDataEntryValue | string;
  defaultLandingPageData: string;
  authCode: string;
}

export async function CreateNewSite({
  companyName,
  companyLogo,
  assignedSubDomain,
  siteCode,
  defaultLandingPageData,
  authCode,
}: PropsInterface) {
  try {
    const bodyData = new FormData();
    bodyData.append('mc_name', companyName);
    bodyData.append('mc_domainKey', assignedSubDomain);
    bodyData.append('mc_route53Key', siteCode);
    bodyData.append('mc_logo', companyLogo);
    bodyData.append('fc_data', defaultLandingPageData);
    bodyData.append('mc_email', '');
    bodyData.append('mc_phone', '');

    console.log({ authCode });

    const { data } = await AxiosInstance.post(
      '/back-office/managing-companies/create',
      bodyData,
      {
        headers: {
          'COMPANY-CODE': AppConfig.ADMIN_COMPANY_CODE,
          'Content-Type': 'multipart/form-data',
          'FRONTEND-KEY': AppConfig.ADMIN_FRONTEND_KEY,
          Authorization: authCode,
        },
      }
    );

    console.log({ data: JSON.stringify(data, null, 2) });
    console.log('###################');

    return data;

    return {
      status: ApiResponseStatusEnum.SUCCESS,
      userEmail: data.data.secondaryData.userInfos.person._person.email,
      userId: data.data.secondaryData.userInfos.person._person.pers_code,
      role: data.data.secondaryData.userInfos.person._person.pers_type,
      authToken: data.data.primaryData.authorization,
      companyCode: data.data.secondaryData.userInfos.person._person.mc_code,
    };
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.log({ error: JSON.stringify(error.response?.data, null, 2) });
      console.log('****************************');
      return {
        status: ApiResponseStatusEnum.FAILED,
        message: error.response?.data.data.primaryData.msg,
      };
    }

    return { status: ApiResponseStatusEnum.FAILED, message: 'Request failed' };
  }
}
