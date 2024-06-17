import { AxiosInstance } from '~/utils/axios.utils';
import { isAxiosError } from 'axios';
import { ApiResponseStatusEnum } from '~/utils/enums/ApiResponseStatusEnum';
import { DefaultLandingPageDataInterface } from '../../utils/interfaces/DefaultLandingPageData.interface';

export const getPartnerLandingPageData = async (partnerSiteCode: string) => {
  try {
    const { data } = await AxiosInstance.get('/managing-company/', {
      headers: {
        'COMPANY-CODE': partnerSiteCode,
        'TARGET-COMPANY-CODE': partnerSiteCode,
      },
    });

    return {
      status: ApiResponseStatusEnum.SUCCESS,
      landingPageData: {
        siteName: data.data.primaryData._company.mc_name,
        siteCode: data.data.primaryData._company.mc_code,
        siteSubDomainUrl: data.data.primaryData._company.mc_domainKey,
        siteLogo: data.data.primaryData._company.mc_logo,
        siteRoute53Key: data.data.primaryData._company.mc_route53Key,
        panels: JSON.parse(
          data.data.secondaryData._activeFrontendConfig.cfc_data
        ) as DefaultLandingPageDataInterface[],
      },
    };
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(JSON.stringify(error.response?.data, null, 2));

      return {
        status: ApiResponseStatusEnum.FAILED,
        message: error.response?.data.data.primaryData.msg,
      };
    }

    return { status: ApiResponseStatusEnum.FAILED, message: 'Request failed' };
  }
};
