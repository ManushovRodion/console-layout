export function characterSequence(char: string, length: number) {
  if(!char) return '';
  
  return char[0].repeat(length);
}
