import {
  CreateMissionRequest,
  CreateSubmissionRequest,
  MissionListResponse,
  MissionResponse,
  SubmissionListResponse,
  SubmissionResponse,
  TeamMissionListResponse,
} from '@/api/dto/mission';
import ApiRequest from '@/api/request';

export default class Mission {
  constructor(private readonly request: ApiRequest) {}

  // 글로벌 미션
  public async getMissions(): Promise<MissionListResponse> {
    return this.request.get('/admin/missions');
  }

  public async getMissionDetail(missionId: string): Promise<MissionResponse> {
    return this.request.get(`/admin/missions/${missionId}`);
  }

  public async createMission(body: CreateMissionRequest): Promise<MissionResponse> {
    return this.request.post('/admin/missions', body);
  }

  public async modifyMission(
    body: CreateMissionRequest,
    missionId: string
  ): Promise<MissionResponse> {
    return this.request.put(`/admin/missions/${missionId}`, body);
  }

  public async deleteMission(missionId: string): Promise<MissionResponse> {
    return this.request.delete(`/admin/missions/${missionId}`);
  }

  // 시즌 미션
  public async getSeasonMissions(seasonId: string): Promise<MissionListResponse> {
    return this.request.get(`/admin/seasons/${seasonId}/missions`);
  }

  public async createSeasonMission(
    seasonId: string,
    missionId: string
  ): Promise<MissionListResponse> {
    return this.request.post(`/admin/seasons/${seasonId}/missions/${missionId}`);
  }

  public async deleteSeasonMission(seasonId: string, missionId: string): Promise<void> {
    return this.request.delete(`/admin/seasons/${seasonId}/missions/${missionId}`);
  }

  //팀 미션 목록
  public async getTeamMissions(seasonId: string, teamId: string): Promise<TeamMissionListResponse> {
    return this.request.get(`/seasons/${seasonId}/teams/${teamId}/missions`);
  }

  //팀 미션 제출
  public async getSubmissions(seasonId: string, teamId: string): Promise<SubmissionListResponse> {
    return this.request.get(`/seasons/${seasonId}/teams/${teamId}/submissions`);
  }

  public async submitMission(
    seasonId: string,
    teamId: string,
    missionId: string,
    body: CreateSubmissionRequest
  ): Promise<SubmissionResponse> {
    return this.request.post(
      `/seasons/${seasonId}/teams/${teamId}/missions/${missionId}/submissions`,
      body
    );
  }

  public async getSubmission(
    seasonId: string,
    teamId: string,
    missionId: string
  ): Promise<SubmissionResponse> {
    return this.request.get(
      `/seasons/${seasonId}/teams/${teamId}/missions/${missionId}/submissions`
    );
  }
}
