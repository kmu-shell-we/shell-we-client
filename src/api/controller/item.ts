import { InventoryResponse, ItemResponse } from '@/api/dto/item';
import ApiRequest from '@/api/request';

export default class Item {
  constructor(private readonly request: ApiRequest) {}

  public async getItem(seasonId: string, teamId: string): Promise<ItemResponse> {
    return this.request.get(`/seasons/${seasonId}/teams/${teamId}/items/draw`);
  }

  public async getCurrentInventory(seasonId: string, teamId: string): Promise<InventoryResponse> {
    return this.request.get(`/seasons/${seasonId}/teams/${teamId}/items`);
  }

  public async getTeamInventory(seasonId: string, teamId: string): Promise<InventoryResponse> {
    return this.request.get(`/admin/seasons/${seasonId}/teams/${teamId}/items`);
  }
}
