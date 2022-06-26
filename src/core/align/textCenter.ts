import { characterSequence } from '../characterSequence';
import { parseText } from '../parseText';

export function textCenter(
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

  let after, before;
  const maxLength = maxRowLength - fullText.length;

  if (maxLength % 2) {
    after = characterSequence(' ', Math.floor(maxLength / 2));
    before = ` ${after}`;
  } else {
    after = before = characterSequence(' ', maxLength / 2);
  }

  return `${before}${context}${after}`;
}
