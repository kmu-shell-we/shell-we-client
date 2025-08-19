import ApiRequest from '@/api/request';

export default class TeamMember {
  constructor(private readonly request: ApiRequest) {}

  public async addUser(seasonId: string, teamId: string, userId: string): Promise<void> {
    return this.request.post(`/admin/seasons/${seasonId}/teams/${teamId}/members/${userId}`);
  }

  public async deleteUser(seasonId: string, teamId: string, userId: string): Promise<void> {
    return this.request.delete(`/admin/seasons/${seasonId}/teams/${teamId}/members/${userId}`);
  }
}
