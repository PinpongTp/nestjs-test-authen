import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { RolesGuard } from './auth/roles.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalGuards(new RolesGuard());
  await app.listen(3000);
}
bootstrap();
