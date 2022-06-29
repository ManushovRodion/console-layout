import { characterSequence } from '../characterSequence';
import { parseText } from '../parseText';
import { Context } from '../types';

export function textCenter(
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

  let after, before;
  const maxLength = maxRowLength - fullText.length;

  if (maxLength % 2) {
    after = characterSequence(' ', Math.floor(maxLength / 2));
    before = ` ${after}`;
  } else {
    after = before = characterSequence(' ', maxLength / 2);
  }

  return `${before}${text}${after}`;
}
