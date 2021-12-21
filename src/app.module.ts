import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SecretNotesModule } from './secret-notes/secret-notes.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SecretNotesModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb://root:example@localhost:27017/tech-assignment?authSource=admin',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
