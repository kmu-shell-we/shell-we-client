import { Role } from '@/api/schema/user';

export interface UserResponse {
  id: string;
  createdAt: string;
  studentId: string;
  name: string;
  avatar: string;
  role: Role;
}

export interface SimpleUserResponse {
  id: string;
  name: string;
  avatar: string;
}

export interface UserListResponse {
  users: SimpleUserResponse[];
}
