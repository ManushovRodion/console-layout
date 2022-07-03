import { characterSequence } from '../characterSequence';
import { parseText } from '../parseText';
import { Context } from '../types';

export function textCenter(
  context: Context,
  maxRowLength: number,
  indentBefore = 0,
  indentAfter = 0
) {
  const { textNoAnsi, text } = parseText(
    context,
    maxRowLength,
    indentBefore,
    indentAfter
  );

  if (textNoAnsi.length === maxRowLength) {
    return textNoAnsi;
  }

  let after, before;
  const maxLength = maxRowLength - textNoAnsi.length;

  if (maxLength % 2) {
    after = characterSequence(' ', Math.floor(maxLength / 2));
    before = ` ${after}`;
  } else {
    after = before = characterSequence(' ', maxLength / 2);
  }

  return `${before}${text}${after}`;
}
