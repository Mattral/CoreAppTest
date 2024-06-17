import { randomBytes } from 'node:crypto';

export const generateRandomString = (): string => {
  const randomLetter = String.fromCharCode(0 | (Math.random() * 26 + 97));
  const string = randomBytes(32).toString('base64url').toLowerCase();

  return `${randomLetter}${string}`;
};
