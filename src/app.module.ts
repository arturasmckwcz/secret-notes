import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SecretNotesModule } from './secret-notes/secret-notes.module';
import { UsersModule } from './users/users.module';

import { getMongoURI } from '../db';

console.log('app.module.ts:', getMongoURI());

@Module({
  imports: [
    SecretNotesModule,
    UsersModule,
    MongooseModule.forRoot(getMongoURI()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
