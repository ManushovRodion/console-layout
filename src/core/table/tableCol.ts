import { textCenter } from '../align/textCenter';
import { textLeft } from '../align/textLeft';
import { textRight } from '../align/textRight';
import { Context, TextAlign } from '../types';

export function tableCol(
  context: Context,
  width: number,
  textAlign: TextAlign = 'left'
) {
  if (textAlign === 'center') {
    return textCenter(context, width, 1, 1);
  }

  if (textAlign === 'right') {
    return textRight(context, width, 1, 1);
  }

  return textLeft(context, width, 1, 1);
}
