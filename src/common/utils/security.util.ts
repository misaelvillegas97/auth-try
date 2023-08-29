import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SecurityUtil {
  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  async comparePasswords(newPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(newPassword, hashedPassword);
  }
}