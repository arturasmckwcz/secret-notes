const {
  scrypt,
  randomBytes,
  createCipheriv,
  createDecipheriv,
} = require('crypto');

const ALGORYTHM = 'aes-192-cbc';
const GENERATED_KEY_LENGTH = 24; // depends on algo
const IV_LENGTH = 16;
const IV = Buffer.from('61c241f0b725e9f681e07a40', 'utf8').slice(0, IV_LENGTH);
const SALT = 'H6oc5LK0';
const USER_KEY_LENGTH = 16;

export function encrypt(note: string, userKey: string): Promise<string> {
  return new Promise((resolve) => {
    scrypt(userKey, SALT, GENERATED_KEY_LENGTH, (error, key) => {
      if (error) throw error;
      const cipher = createCipheriv(ALGORYTHM, key, IV);
      resolve(cipher.update(note, 'utf8', 'hex') + cipher.final('hex'));
    });
  });
}
export function decrypt(
  encryptedNote: string,
  userKey: string,
): Promise<string> {
  return new Promise((resolve) => {
    scrypt(userKey, SALT, GENERATED_KEY_LENGTH, (error, key) => {
      if (error) throw error;
      const decipher = createDecipheriv(ALGORYTHM, key, IV);
      resolve(
        decipher.update(encryptedNote, 'hex', 'utf8') + decipher.final('utf8'),
      );
    });
  });
}

export function generateUserKey(): string {
  return randomBytes(USER_KEY_LENGTH).toString('base64');
}
