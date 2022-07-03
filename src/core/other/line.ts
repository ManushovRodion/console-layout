import { characterSequence } from './characterSequence';

export function line(length: number, char: string, borderChar = '') {
  const maxLength = borderChar ? length - 2 : length;

  return `${borderChar}${characterSequence(char[0], maxLength)}${borderChar}`;
}
