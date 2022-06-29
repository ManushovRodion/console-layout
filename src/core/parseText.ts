import { characterSequence } from './characterSequence';
import { Context } from './types';

export function parseText(
  context: Context,
  maxLength: number,
  indentBefore = 0,
  indentAfter = 0
) {
  const textString = String(context);

  const regExp = new RegExp('(\\u001b|\\x1b)\\[[0-9]{1,2}(;[0-9])?m', 'g');
  const before = characterSequence(' ', indentBefore);
  const after = characterSequence(' ', indentAfter);

  let textNoAnsi = textString.replace(regExp, '');
  const template = textString.replace(textNoAnsi, '#CONTEXT#');
  const length = maxLength - indentBefore - indentAfter

  if (textNoAnsi.length > length) {
    textNoAnsi = textNoAnsi.slice(0, length);
  }

  const fullText = `${before}${textNoAnsi}${after}`;
  const text = template.replace('#CONTEXT#', fullText);

  return { template, fullText, text };
}
