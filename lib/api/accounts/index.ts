import type { AccountQueryParams } from '@type/common';
import type { AxiosResponse } from 'axios';
import clientAPI from '../common/customAxios';

interface InvestmentAccountRepository {
  getInvestmentAccount({
    broker_id,
    is_active,
    status,
    q,
    pageNum,
  }: AccountQueryParams): Promise<AxiosResponse<any>>;
}

class InvestmentAccountRepositoryImp implements InvestmentAccountRepository {
  private baseQueryString: string = '/accounts?_expand=user';

  private getPageString(pageNum: number) {
    return `&_page=${pageNum}&_limit=20`;
  }

  getInvestmentAccount({
    broker_id,
    is_active,
    status,
    q,
    pageNum,
  }: AccountQueryParams) {
    const pageString = this.getPageString(pageNum);
    return clientAPI.get(this.baseQueryString + pageString, {
      params: {
        ...(broker_id && { broker_id }),
        ...(is_active && { is_active }),
        ...(status && { status }),
        ...(q && { q }),
      },
    });
  }
}

export default new InvestmentAccountRepositoryImp();
