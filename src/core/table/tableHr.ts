import { characterSequence } from '../characterSequence';

export function tableHr(
  length: number[],
  borderChar: string,
  borderXChar: string,
  hideOuterBorder = false
) {
  const row = length
    .map((length) => characterSequence(borderChar, length))
    .join(borderXChar);

  if (hideOuterBorder) {
    return row;
  }

  return `${borderChar}${row}${borderChar}`;
}
