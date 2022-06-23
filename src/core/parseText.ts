import { characterSequence } from './characterSequence';

export function parseText(
  text: string,
  maxLength: number,
  indentBefore = 0,
  indentAfter = 0
) {
  if (!text) return '';

  let resultText = [
    characterSequence(' ', indentBefore),
    text.toString(),
    characterSequence(' ', indentAfter),
  ].join('');

  if (resultText.length > maxLength) {
    resultText = resultText.slice(0, maxLength);
  }

  return resultText;
}
