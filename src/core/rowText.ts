import { textCenter } from './align/textCenter';
import { textLeft } from './align/textLeft';
import { textRight } from './align/textRight';

export function rowText(
  text: string,
  length: number,
  textAlign: 'left' | 'right' | 'center' = 'left',
  borderChar = ''
) {
  const maxLength = borderChar ? length - 2 : length;

  let fullText;
  if (textAlign === 'center') {
    fullText = textCenter(text, maxLength);
  } else if (textAlign === 'right') {
    fullText = textRight(text, maxLength);
  } else {
    fullText = textLeft(text, maxLength);
  }

  return `${borderChar}${fullText}${borderChar}`;
}
