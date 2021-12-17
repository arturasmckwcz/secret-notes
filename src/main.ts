import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

import { SecretNotesModule } from './secret-notes/secret-notes.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create(SecretNotesModule);
  await app.listen(3008);
}
bootstrap();
