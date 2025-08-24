import { ItemType } from '@/api/schema/item';

export interface ItemResponse {
  itemType: ItemType;
  previousMission?: string;
  afterMission?: string;
  otherTeam?: string;
  amount?: number;
}

export interface InventoryResponse {
  items: ItemType[];
}
