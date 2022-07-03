import { textCenter } from '../align/textCenter';
import { textLeft } from '../align/textLeft';
import { textRight } from '../align/textRight';
import { Context } from '../types';
import { RowTextOptions } from './types';

function parseOptions(options: RowTextOptions = {}) {
  let { borderChar } = options;
  if (!borderChar) borderChar = '';

  let { textAlign } = options;
  if (!textAlign) textAlign = 'left';

  return {
    borderChar,
    textAlign,
  };
}

export function rowText(
  text: Context,
  length: number,
  options?: RowTextOptions
) {
  const opt = parseOptions(options);
  const maxLength = opt.borderChar ? length - 2 : length;

  let fullText;
  if (opt.textAlign === 'center') {
    fullText = textCenter(text, maxLength);
  } else if (opt.textAlign === 'right') {
    fullText = textRight(text, maxLength);
  } else {
    fullText = textLeft(text, maxLength);
  }

  return `${opt.borderChar}${fullText}${opt.borderChar}`;
}
