import ApiRequest from '@/api/request';

export default class Auth {
  constructor(private readonly request: ApiRequest) {}

  public async login(): Promise<void> {
    return this.request.get('/auth/oauth/wink');
  }
}
