import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from 'src/users/users.module';

import { SecretNotesService } from './secret-notes.service';
import { SecretNotesController } from './secret-notes.controller';
import { SecretNoteSchema } from './secret-notes.model';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([
      { name: 'SecretNote', schema: SecretNoteSchema },
    ]),
  ],
  controllers: [SecretNotesController],
  providers: [SecretNotesService],
})
export class SecretNotesModule {}
