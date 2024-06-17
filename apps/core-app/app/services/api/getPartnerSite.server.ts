import { AxiosInstance } from '~/utils/axios.utils';
import { isAxiosError } from 'axios';
import { ApiResponseStatusEnum } from '../../utils/enums/ApiResponseStatusEnum';
import { AppConfig } from '../../config';

export async function GetPartnerSite(authCode: string, siteCode: string) {
  try {
    console.log({
      Authorization: authCode,
      Company_Code: AppConfig.ADMIN_COMPANY_CODE,
      FrontendKey: AppConfig.ADMIN_FRONTEND_KEY,
    });

    const { data } = await AxiosInstance.get('/back-office/managing-company/', {
      headers: {
        'COMPANY-CODE': AppConfig.ADMIN_COMPANY_CODE,
        'FRONTEND-KEY': AppConfig.ADMIN_FRONTEND_KEY,
        Authorization: authCode,
        'TARGET-COMPANY-CODE': siteCode,
      },
    });

    return {
      status: ApiResponseStatusEnum.SUCCESS,
      siteName: data.data.primaryData._company.mc_name,
      siteSubDomainUrl: data.data.primaryData._company.mc_domainKey,
      siteLogo: data.data.primaryData._company.mc_logo,
      siteCode,
    };
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      return {
        status: ApiResponseStatusEnum.FAILED,
        message: error.response?.data.data.primaryData.msg,
      };
    }

    return { status: ApiResponseStatusEnum.FAILED, message: 'Request failed' };
  }
}
