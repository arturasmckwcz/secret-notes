export class CreateSecretNoteDto {
  constructor(public id: number, public owner: string, public note: string) {}
}
