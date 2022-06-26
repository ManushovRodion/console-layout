import { characterSequence } from '../characterSequence';
import { parseText } from '../parseText';

export function textRight(
  text: string,
  maxRowLength: number,
  indentBefore = 0,
  indentAfter = 0
) {
  const { fullText, context } = parseText(
    text,
    maxRowLength,
    indentBefore,
    indentAfter
  );

  if (fullText.length === maxRowLength) {
    return fullText;
  }

  return `${characterSequence(' ', maxRowLength - fullText.length)}${context}`;
}
