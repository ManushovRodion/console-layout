import { characterSequence } from '../other/characterSequence';
import { parseText } from '../other/parseText';
import { Context } from '../types';

export function textLeft(
  context: Context,
  maxRowLength: number,
  indentBefore = 0,
  indentAfter = 0
) {
  const { textNoAnsi, text } = parseText(context, {
    maxLength: maxRowLength,
    indentBefore,
    indentAfter,
  });

  if (textNoAnsi.length === maxRowLength) {
    return text;
  }

  return `${text}${characterSequence(' ', maxRowLength - textNoAnsi.length)}`;
}
