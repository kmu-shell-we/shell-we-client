import { SimpleTeamResponse } from '@/api/dto/team';
import ApiRequest from '@/api/request';

export default class Score {
  constructor(private readonly request: ApiRequest) {}

  public async getScore(seasonId: string, simplified: string): Promise<SimpleTeamResponse> {
    const params = new URLSearchParams();

    if (simplified !== undefined) {
      params.append('simplified', simplified);
    }

    return this.request.get(`/seasons/${seasonId}/ranks?${params}`);
  }
}
