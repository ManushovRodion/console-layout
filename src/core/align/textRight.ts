import { characterSequence } from '../characterSequence';
import { parseText } from '../parseText';

export function textRight(
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

  return `${characterSequence(' ', rowLength - fullText.length)}${context}`;
}
