import { isAxiosError } from 'axios';
import { AxiosInstance } from '~/utils/axios.utils';
import { ApiResponseStatusEnum } from '../../utils/enums/ApiResponseStatusEnum';
import { AppConfig } from '../../config';

interface PropsInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// export interface PartnerRegisterResponseInterface {
//   status: string;
//   userId: string;
//   authToken: string;
//   email: string;
// }

export const RegisterAuth = async ({
  firstName,
  lastName,
  email,
  password,
}: PropsInterface) => {
  try {
    const bodyData = new FormData();
    bodyData.append('pers_fName', firstName);
    bodyData.append('pers_mName', '');
    bodyData.append('pers_lName', lastName);
    bodyData.append('email', email);
    bodyData.append('password', password);
    bodyData.append('password_confirmation', password);

    const { data } = await AxiosInstance.post(
      '/auth/partner-registering',
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
};
