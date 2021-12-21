export function encrypt(note: string, key: string): string {
  return note + key;
}
export function decrypt(note: string, key: string): string {
  return note.slice(0, -1 * key.length);
}

export function generateUserKey() {
  return 'ENCRYPTED!';
}
