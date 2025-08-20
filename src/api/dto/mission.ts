import { z } from 'zod';

import { MissionType } from '@/api/schema/mission';

export const CreateMissionRequestSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요.'),
  reward: z.number().int('보상은 정수여야 합니다.').min(1, '보상은 1 이상이어야 합니다.'),
  type: z.enum(MissionType),
});

export const CreateSubmissionRequestSchema = z.object({
  image: z.string().min(1, '사진 url을 입력해야 합니다.'),
});

export type CreateMissionRequest = z.infer<typeof CreateMissionRequestSchema>;
export type CreateSubmissionRequest = z.infer<typeof CreateSubmissionRequestSchema>;
//=========================================================================================

//글로벌 미션
export interface MissionResponse {
  id: string;
  type: MissionType;
  name: string;
  description: string;
}

export interface MissionListResponse {
  missions: MissionResponse[];
}

//팀 미션
export interface TeamMissionResponse {
  id: string;
  type: MissionType;
  missionResponse: MissionResponse;
}

export interface TeamMissionListResponse {
  teamMissions: TeamMissionResponse[];
}

//팀 미션 제출
export interface SubmissionResponse {
  teamMissionResponse: TeamMissionResponse;
  image: string;
}

export interface SubmissionListResponse {
  submissions: SubmissionResponse[];
}
