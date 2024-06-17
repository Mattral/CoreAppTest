import { AxiosInstance } from '~/utils/axios.utils';
import { isAxiosError } from 'axios';
import { ApiResponseStatusEnum } from '../../utils/enums/ApiResponseStatusEnum';
import { AppConfig } from '../../config';

interface PropsInterface {
  email: FormDataEntryValue | string;
  password: FormDataEntryValue | string;
}

export async function LoginAuth({ email, password }: PropsInterface) {
  try {
    const bodyData = new FormData();
    bodyData.append('email', email);
    bodyData.append('password', password);

    const { data } = await AxiosInstance.post(
      '/auth/core-app-login',
      bodyData,
      {
        headers: {
          'COMPANY-CODE': AppConfig.ADMIN_COMPANY_CODE,
          'Content-Type': 'multipart/form-data',
          'FRONTEND-KEY': AppConfig.ADMIN_FRONTEND_KEY,
        },
      }
    );

    console.log(JSON.stringify(data, null, 2));

    return {
      status: ApiResponseStatusEnum.SUCCESS,
      userEmail: data.data.secondaryData.userInfos.person._person.email,
      userId: data.data.secondaryData.userInfos.person._person.pers_code,
      role: data.data.secondaryData.userInfos.person._person.pers_type,
      authToken: data.data.primaryData.authorization,
      companyCode: data.data.secondaryData.userInfos.person._person.mc_code,
    };
  } catch (error: unknown) {
    console.log(JSON.stringify(error, null, 2));
    if (isAxiosError(error)) {
      return {
        status: ApiResponseStatusEnum.FAILED,
        message: error.response?.data.data.primaryData.msg,
      };
    }

    return { status: ApiResponseStatusEnum.FAILED, message: 'Request failed' };
  }
}
