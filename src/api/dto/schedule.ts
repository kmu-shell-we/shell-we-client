import { SimpleUserResponse } from '@/api/dto/user';
import { DayOfWeek } from '@/api/schema/dayOfWeek';

export interface TimeRange {
  startedAt: string;
  endedAt: string;
}

export interface ScheduleResponse {
  schedules: Record<DayOfWeek, TimeRange[]>;
}

export interface UserSchedulePair {
  schedules: Record<DayOfWeek, TimeRange[]>;
  user: SimpleUserResponse;
}

export interface TeamScheduleResponse {
  userSchedules: UserSchedulePair[];
}
