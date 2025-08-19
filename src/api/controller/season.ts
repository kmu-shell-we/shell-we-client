import {
  ModifySeasonRequest,
  SeasonListResponse,
  SeasonResponse,
  SendCreateSeasonRequest,
} from '@/api/dto/season';
import ApiRequest from '@/api/request';

export default class Season {
  constructor(private readonly request: ApiRequest) {}

  public async getCurrentSeason(): Promise<SeasonResponse> {
    return this.request.get('seasons/current');
  }

  public async getSeasonsList(): Promise<SeasonListResponse> {
    return this.request.get('/admin/seasons');
  }

  public async getSeasonDetail(seasonId: string): Promise<SeasonResponse> {
    return this.request.get(`/admin/seasons/${seasonId}`);
  }

  public async createSeason(body: SendCreateSeasonRequest): Promise<SeasonResponse> {
    return this.request.post('/admin/seasons', body);
  }

  public async modifySeason(seasonId: string, body: ModifySeasonRequest): Promise<SeasonResponse> {
    return this.request.put(`/admin/seasons/${seasonId}`, body);
  }

  public async deleteSeason(seasonId: string): Promise<SeasonResponse> {
    return this.request.delete(`/admin/seasons/${seasonId}`);
  }
}
