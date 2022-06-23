import { characterSequence } from '../characterSequence';
import { parseText } from '../parseText';

export function textLeft(
  text: string,
  rowLength: number,
  indentBefore = 0,
  indentAfter = 0
) {
  const { fullText, context } = parseText(
    text,
    rowLength,
    indentBefore,
    indentAfter
  );

  if (fullText.length === rowLength) {
    return fullText;
  }

  return `${context}${characterSequence(' ', rowLength - fullText.length)}`;
}