export function characterSequence(char: string, length: number) {
  return new Array(length).fill(char[0]).join('');
}