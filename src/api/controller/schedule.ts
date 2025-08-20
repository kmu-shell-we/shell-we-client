import { ScheduleResponse, TeamScheduleResponse } from '@/api/dto/schedule';
import ApiRequest from '@/api/request';

export default class Schedule {
  constructor(private readonly request: ApiRequest) {}

  public async getMySchedule(): Promise<ScheduleResponse> {
    return this.request.get('/users/me/schedules');
  }

  public async upsertMySchedule(identifier: string): Promise<ScheduleResponse> {
    return this.request.post(`/users/me/schedules/${identifier}`);
  }

  public async getTeamSchedule(
    seasonId: string,
    teamId: string,
    userIds: string[]
  ): Promise<TeamScheduleResponse> {
    const params = new URLSearchParams();

    if (userIds !== undefined && userIds.length > 0) {
      params.append('users', userIds.join(','));
    }
    return this.request.get(`/seasons/${seasonId}/teams/${teamId}/schedules?${params}`);
  }
}
