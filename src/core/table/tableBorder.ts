import { characterSequence } from '../other/characterSequence';
import { TableBorderOptions } from './types';

function parseOptions(options: TableBorderOptions = {}) {
  let { char } = options;
  char = char ? char[0] : '-';

  let { xChar } = options;
  xChar = xChar ? xChar[0] : '#';

  const { hideOuterXChar } = options;

  return {
    char,
    xChar,
    hideOuterXChar: hideOuterXChar == true,
  };
}

export function tableBorder(width: number[], options?: TableBorderOptions) {
  const opt = parseOptions(options);

  const row = width
    .map((length) => characterSequence(opt.char, length))
    .join(opt.xChar);

  if (opt.hideOuterXChar) {
    return row;
  }

  return `${opt.xChar}${row}${opt.xChar}`;
}
