import { isAxiosError } from 'axios';
import { AxiosInstance } from '~/utils/axios.utils';
import { ApiResponseStatusEnum } from '../../utils/enums/ApiResponseStatusEnum';
import { AppConfig } from '../../config';

export async function ResendEmailVerificationCode(verificationEmail: string) {
  try {
    const bodyData = new FormData();
    bodyData.append('email', verificationEmail);

    const { data } = await AxiosInstance.post(
      '/request-email-validation-code',
      bodyData,
      {
        headers: {
          'COMPANY-CODE': AppConfig.ADMIN_COMPANY_CODE,
          'Content-Type': 'multipart/form-data',
          'FRONTEND-KEY': AppConfig.ADMIN_FRONTEND_KEY,
        },
      }
    );

    return {
      status: ApiResponseStatusEnum.SUCCESS,
      message: data.data.primaryData.msg,
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
