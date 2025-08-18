import { Role } from '@/api/schema/user';

export interface UserResponse {
  id: string;
  studentId: string;
  name: string;
  email: string;
  avatar: string;
  phone: string;
  role: Role;
}

export interface SimpleUserResponse {
  id: string;
  studentId: string;
  name: string;
  avatar: string;
}

export interface UserListResponse {
  users: SimpleUserResponse[];
}
