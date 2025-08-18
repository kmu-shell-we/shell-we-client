import { UserListResponse, UserResponse } from '@/api/dto/user';
import ApiRequest from '@/api/request';

export default class Auth {
  constructor(private readonly request: ApiRequest) {}

  public async getMyInfo(): Promise<UserResponse> {
    return this.request.get('users/me');
  }

  public async getAllUsersInfo(): Promise<UserListResponse> {
    return this.request.get('admin/users');
  }

  public async getUserDetail(userId: string): Promise<UserResponse> {
    return this.request.get(`admin/users/${userId}`);
  }
}
