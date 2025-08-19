import {
  TeamListResponse,
  TeamResponse,
  getOtherTeamResponse,
  getTeamResponse,
} from '@/api/dto/team';
import ApiRequest from '@/api/request';

export default class Team {
  constructor(private readonly request: ApiRequest) {}

  public async getTeamList(seasonId: string): Promise<TeamListResponse> {
    return this.request.get(`/seasons/${seasonId}/teams`);
  }

  public async getMyTeamInfo(seasonId: string): Promise<getTeamResponse> {
    return this.request.get(`/seasons/${seasonId}/teams/me`);
  }

  public async getOtherTeamInfo(seasonId: string, teamId: string): Promise<getOtherTeamResponse> {
    return this.request.get(`/seasons/${seasonId}/teams/${teamId}`);
  }

  public async getTeamDetail(seasonId: string, teamId: string): Promise<getTeamResponse> {
    return this.request.get(`/admin/seasons/${seasonId}/teams/${teamId}`);
  }

  public async createTeam(seasonId: string): Promise<TeamResponse> {
    return this.request.post(`/admin/seasons/${seasonId}/teams`);
  }

  public async deleteTeam(seasonId: string, teamId: string): Promise<void> {
    return this.request.delete(`/admin/seasons/${seasonId}/teams/${teamId}`);
  }
}
