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
import { ISecretNote } from './secret-notes.model';

@Controller('secret-notes')
export class SecretNotesController {
  constructor(private readonly secretNotesService: SecretNotesService) {}

  @Post()
  async create(@Body() newNote: ISecretNote) {
    return { id: await this.secretNotesService.create(newNote) };
  }

  @Get()
  async findAll() {
    return await this.secretNotesService.findAll();
  }

  @Get('encrypted')
  async findAllEncrypted() {
    return await this.secretNotesService.findAll(true);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.secretNotesService.findOne(id);
  }

  @Get('encrypted/:id')
  findOneEncrypted(@Param('id') id: string) {
    return this.secretNotesService.findOne(id, true);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNote: ISecretNote) {
    return this.secretNotesService.update(id, updateNote);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.secretNotesService.remove(id);
  }
}
