import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SecretNotesService } from './secret-notes.service';
import { CreateSecretNoteDto } from './dto/create-secret-note.dto';
import { UpdateSecretNoteDto } from './dto/update-secret-note.dto';

@Controller('secret-notes')
export class SecretNotesController {
  constructor(private readonly secretNotesService: SecretNotesService) {}

  @Post()
  create(@Body() newNote: CreateSecretNoteDto) {
    return { id: this.secretNotesService.create(newNote) };
  }

  @Get()
  findAll() {
    return this.secretNotesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.secretNotesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateSecretNoteDto: UpdateSecretNoteDto,
  ) {
    return this.secretNotesService.update(+id, updateSecretNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.secretNotesService.remove(+id);
  }
}
