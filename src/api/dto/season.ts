import { z } from 'zod';

export const SendCreateSeasonRequestSchema = z.object({
  year: z.number().int(),
  semester: z
    .number()
    .int()
    .refine((val) => val === 1 || val === 2, { message: '학기는 1 또는 2만 가능합니다.' }),
  startedAt: z.iso.datetime({ message: '날짜 형식이어야 합니다' }),
  endedAt: z.iso.datetime({ message: '날짜 형식이어야 합니다' }),
});

export const ModifySeasonRequestSchema = z.object({
  startedAt: z.iso.datetime({ message: '날짜 형식이어야 합니다' }),
  endedAt: z.iso.datetime({ message: '날짜 형식이어야 합니다' }),
});

export type SendCreateSeasonRequest = z.infer<typeof SendCreateSeasonRequestSchema>;
export type ModifySeasonRequest = z.infer<typeof ModifySeasonRequestSchema>;
//=========================================================================================================

export interface SeasonResponse {
  id: string;
  year: string;
  semester: number;
  startedAt: string;
  endedAt: string;
}

export interface SimpleSeasonResponse {
  id: string;
  year: number;
  semester: number;
}

export interface SeasonListResponse {
  seasons: SimpleSeasonResponse[];
}
