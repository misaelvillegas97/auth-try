import { Role } from './role.interface';

export interface User {
  id: string;
  email: string;
  password: string;
  roles: Role[];
  isVerified: boolean;
}