import { characterSequence } from './characterSequence';
import { Context } from './types';

export function parseText(
  context: Context,
  maxLength: number,
  indentBefore = 0,
  indentAfter = 0
) {
  const regExp = new RegExp('(\\u001b|\\x1b)\\[[0-9]{1,2}(;[0-9])?m', 'g');
  const before = characterSequence(' ', indentBefore);
  const after = characterSequence(' ', indentAfter);

  const textString = `${before}${context}${after}`;

  let textNoAnsi = textString.replace(regExp, '');
  const template = textString.replace(textNoAnsi, '#CONTEXT#');
  const length = maxLength - indentBefore - indentAfter;

  if (textNoAnsi.length > length) {
    textNoAnsi = textNoAnsi.slice(0, length);
  }

  const text = template.replace('#CONTEXT#', textNoAnsi);

  return { textNoAnsi, text };
}
