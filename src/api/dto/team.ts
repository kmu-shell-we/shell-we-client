import { SimpleUserResponse } from '@/api/dto/user';

export interface TeamResponse {
  id: string;
  name: string;
  experience: number;
  point: number;
}

export interface OtherTeamResponse {
  id: string;
  name: string;
  experience: number;
}

export interface SimpleTeamResponse {
  id: string;
  name: string;
  experience: number;
}

export interface TeamListResponse {
  teams: SimpleTeamResponse[];
}

export interface getTeamResponse {
  team: TeamResponse;
  users: SimpleUserResponse[];
}

export interface getOtherTeamResponse {
  team: OtherTeamResponse;
  users: SimpleUserResponse[];
}
