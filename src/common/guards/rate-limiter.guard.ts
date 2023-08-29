import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RateLimiter } from 'limiter';

@Injectable()
export class RateLimiterGuard implements CanActivate {
  private limiter: RateLimiter;

  constructor(private reflector: Reflector) {
    this.limiter = new RateLimiter({ tokensPerInterval: 100, interval: 'hour' });
  }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const remaining = this.limiter.removeTokens(1);

    if (remaining < 0) {
      throw new HttpException('Too Many Requests', HttpStatus.TOO_MANY_REQUESTS);
    }

    return true;
  }
}