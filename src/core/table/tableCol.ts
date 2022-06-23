import { textCenter } from '../align/textCenter';
import { textLeft } from '../align/textLeft';
import { textRight } from '../align/textRight';

export function tableCol(
  text: string,
  length: number,
  textAlign: 'left' | 'right' | 'center' = 'left'
) {
  if (textAlign === 'center') {
    return textCenter(text, length, 1, 1);
  }

  if (textAlign === 'right') {
    return textRight(text, length, 1, 1);
  }

  return textLeft(text, length, 1, 1);
}
