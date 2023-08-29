import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionInterceptor } from './common/interceptors/http-exception.interceptor';
import { RateLimiterGuard } from './common/guards/rate-limiter.guard';
import { CorsMiddleware } from './common/middleware/cors.middleware';
import { HttpsRedirectMiddleware } from './common/middleware/https-redirect.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalInterceptors(new HttpExceptionInterceptor());
  app.useGlobalGuards(new RateLimiterGuard());
  app.use(CorsMiddleware);
  app.use(HttpsRedirectMiddleware);

  await app.listen(3000);
}

bootstrap();