import { AxiosInstance } from '~/utils/axios.utils';
import { isAxiosError } from 'axios';
import { ApiResponseStatusEnum } from '../../utils/enums/ApiResponseStatusEnum';
import { AppConfig } from '../../config';

interface WhiteLabelledSiteInterface {
  siteName: string;
  siteCode: string;
  siteSubDomainUrl: string;
  siteLogo: string;
  siteRoute53Code: string;
}

export async function GetPartnerSiteList(authCode: string) {
  try {
    console.log({
      Authorization: authCode,
      Company_Code: AppConfig.ADMIN_COMPANY_CODE,
      FrontendKey: AppConfig.ADMIN_FRONTEND_KEY,
    });

    const { data } = await AxiosInstance.get(
      '/back-office/managing-companies/',
      {
        headers: {
          'COMPANY-CODE': AppConfig.ADMIN_COMPANY_CODE,
          'FRONTEND-KEY': AppConfig.ADMIN_FRONTEND_KEY,
          Authorization: authCode,
        },
      }
    );

    const whiteLabelledSites: WhiteLabelledSiteInterface[] =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data.data.primaryData._managingCompanies.data.map((item: any) => {
        return {
          siteName: item.mc_name,
          siteCode: item.mc_code,
          siteSubDomainUrl: item.mc_domainKey,
          siteLogo: item.mc_logo,
          siteRoute53Code: item.mc_route53Key,
        };
      });

    return {
      status: ApiResponseStatusEnum.SUCCESS,
      whiteLabelledSites,
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
