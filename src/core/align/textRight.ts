import { characterSequence } from '../characterSequence';
import { parseText } from '../parseText';
import { Context } from '../types';

export function textRight(
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

  return `${characterSequence(' ', maxRowLength - textNoAnsi.length)}${text}`;
}
