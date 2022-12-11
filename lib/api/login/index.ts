import type { authInputProps } from '@type/molecules/LoginInputForm';
import clientAPI from '../common/customAxios';

interface LoginRepository {
  handleLogin(authInputs: authInputProps): void;
}

class LoginRepositoryImp implements LoginRepository {
  private baseQueryString: string = '/login';

  handleLogin(authInputs: authInputProps) {
    try {
      return clientAPI.post(this.baseQueryString, authInputs);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default new LoginRepositoryImp();
