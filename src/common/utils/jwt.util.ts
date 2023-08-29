import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { JwtPayloadInterface } from '../../auth/interfaces/jwt-payload.interface';

@Injectable()
export class JwtUtil {
  constructor(private readonly jwtService: JwtService) {}

  async generateToken(user: JwtPayloadInterface): Promise<string> {
    return this.jwtService.sign(user);
  }

  async validateToken(token: string): Promise<any> {
    return this.jwtService.verify(token);
  }
}