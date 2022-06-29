import { characterSequence } from '../characterSequence';
import { parseText } from '../parseText';
import { Context } from '../types';

export function textLeft(
  context: Context,
  maxRowLength: number,
  indentBefore = 0,
  indentAfter = 0
) {
  const { fullText, text } = parseText(
    context,
    maxRowLength,
    indentBefore,
    indentAfter
  );

  if (fullText.length === maxRowLength) {
    return fullText;
  }

  return `${text}${characterSequence(' ', maxRowLength - fullText.length)}`;
}
