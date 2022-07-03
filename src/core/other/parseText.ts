import { characterSequence } from './characterSequence';
import { Context } from '../types';
import { ParseTextOptions } from './types';

function parseOptions(options: ParseTextOptions = {}) {
  let { indentBefore } = options;
  if (!indentBefore) indentBefore = 0;

  let { indentAfter } = options;
  if (!indentAfter) indentAfter = 0;

  let { maxLength } = options;
  if (!maxLength) maxLength = 0;

  return {
    indentBefore,
    indentAfter,
    maxLength,
  };
}

export function parseText(context: Context, options?: ParseTextOptions) {
  const opt = parseOptions(options);

  const regExp = new RegExp('(\\u001b|\\x1b)\\[[0-9]{1,2}(;[0-9])?m', 'g');
  const before = characterSequence(' ', opt.indentBefore);
  const after = characterSequence(' ', opt.indentAfter);

  const textString = String(context);

  let textNoAnsi = textString.replace(regExp, '');
  const template = textString.replace(textNoAnsi, '#CONTEXT#');
  const length =
    (opt.maxLength || textNoAnsi.length) - opt.indentBefore - opt.indentAfter;

  if (textNoAnsi.length > length) {
    textNoAnsi = textNoAnsi.slice(0, length);
  }

  const text = template.replace('#CONTEXT#', textNoAnsi);

  return {
    textNoAnsi: `${before}${textNoAnsi}${after}`,
    text: `${before}${text}${after}`,
  };
}
