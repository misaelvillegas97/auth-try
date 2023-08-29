import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { User } from '../users/interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { BcryptUtil } from '../common/utils/bcrypt.util';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly bcryptUtil: BcryptUtil,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && await this.bcryptUtil.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload: JwtPayload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(user: User) {
    user.password = await this.bcryptUtil.hash(user.password);
    const createdUser = await this.userService.create(user);
    const payload: JwtPayload = { email: createdUser.email, sub: createdUser.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}