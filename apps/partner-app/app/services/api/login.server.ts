import { ApiResponseStatusEnum } from '../../utils/enums/ApiResponseStatusEnum';
import { UserInterface } from '../../utils/interfaces/User.interface';

export const UserLogin = async (
  email: string,
  password: string
): Promise<UserInterface> => {
  try {
    console.log(email, password);
    return {
      status: ApiResponseStatusEnum.SUCCESS,
      userId: 'string',
      userEmail: 'email',
      authToken: 'string',
      role: 'string',
    };
  } catch (error) {
    return { status: ApiResponseStatusEnum.FAILED, message: '' };
  }
};
