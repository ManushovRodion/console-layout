import { characterSequence } from './characterSequence';

export function parseText(
  text: string,
  maxLength: number,
  indentBefore = 0,
  indentAfter = 0
) {
  const regExp = new RegExp('(\\u001b|\\x1b)\\[[0-9]{1,2}(;[0-9])?m', 'g');
  const before = characterSequence(' ', indentBefore);
  const after = characterSequence(' ', indentAfter);

  let textNoAnsi = text.replace(regExp, '');
  const template = text.replace(textNoAnsi, '#CONTEXT#');
  const length = maxLength - indentBefore - indentAfter

  if (textNoAnsi.length > length) {
    textNoAnsi = textNoAnsi.slice(0, length);
  }

  const fullText = `${before}${textNoAnsi}${after}`;
  const context = template.replace('#CONTEXT#', fullText);

  return { template, fullText, context };
}
