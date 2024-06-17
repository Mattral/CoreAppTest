/**
 * Return basic data about a partner.
 * - Site Name
 * - Logo
 * - Theme etc.
 */

import { AxiosInstance } from '~/utils/axios.utils';
import { isAxiosError } from 'axios';
import { ApiResponseStatusEnum } from '~/utils/enums/ApiResponseStatusEnum';

export const getPartner = async (partnerSiteCode: string) => {
  try {
    const { data } = await AxiosInstance.get('/managing-company/', {
      headers: {
        'COMPANY-CODE': partnerSiteCode,
        'TARGET-COMPANY-CODE': partnerSiteCode,
      },
    });

    return {
      status: ApiResponseStatusEnum.SUCCESS,
      siteName: data.data.primaryData._company.mc_name,
      siteCode: data.data.primaryData._company.mc_code,
      siteSubDomainUrl: data.data.primaryData._company.mc_domainKey,
      siteLogo: data.data.primaryData._company.mc_logo,
      siteRoute53Key: data.data.primaryData._company.mc_route53Key,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        status: ApiResponseStatusEnum.FAILED,
        message: error.response?.data.data.primaryData.msg,
      };
    }

    return { status: ApiResponseStatusEnum.FAILED, message: 'Request failed' };
  }
};
