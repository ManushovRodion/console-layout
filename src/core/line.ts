import { characterSequence } from './other/characterSequence';

export function line(length: number, char = '-', borderChar = '') {
  const maxLength = borderChar ? length - 2 : length;

  return `${borderChar}${characterSequence(char, maxLength)}${borderChar}`;
}
