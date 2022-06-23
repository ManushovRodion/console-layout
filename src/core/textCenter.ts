import { characterSequence } from './characterSequence';
import { parseText } from './parseText';

export function textCenter(
  text: string,
  rowLength: number,
  indentBefore = 0,
  indentAfter = 0
) {
  const fullText = parseText(text, rowLength, indentBefore, indentAfter);

  if (fullText.length === rowLength) {
    return fullText;
  }

  let after, before;
  const maxLength = rowLength - fullText.length;

  if (maxLength % 2) {
    after = characterSequence(' ', Math.floor(maxLength / 2));
    before = ` ${after}`;
  } else {
    after = before = characterSequence(' ', maxLength / 2);
  }

  return `${before}${fullText}${after}`;
}
