import { characterSequence } from '../characterSequence';
import { parseText } from '../other/parseText';
import { render } from '../render';
import { rowText } from '../rowText';
import { CardOptions, CardTitle } from './types';

function parseOptions(options: CardOptions = {}) {
  let { borderHorizonChar } = options;
  if (!borderHorizonChar) borderHorizonChar = '-';

  let { borderVerticalChar } = options;
  if (!borderVerticalChar) borderVerticalChar = '|';

  let { borderXChar } = options;
  if (!borderXChar) borderXChar = '#';

  let { typeResult } = options;
  if (!typeResult) typeResult = 'array';

  const { hidePadding, viewMargin } = options;

  return {
    borderHorizonChar,
    borderVerticalChar,
    borderXChar,
    typeResult,
    hidePadding: hidePadding === true,
    viewMargin: viewMargin === true,
  };
}

export function card(
  context: string[],
  title: CardTitle[] | CardTitle = [],
  options?: CardOptions
) {
  const opt = parseOptions(options);

  if (!context?.length) {
    return opt.typeResult === 'array' ? [] : '';
  }

  const padding = opt.hidePadding ? '' : ' ';
  const margin = opt.viewMargin ? ' ' : '';

  const fullPadding = characterSequence(padding, 2);
  const beforeContext = `${margin}${opt.borderVerticalChar}${fullPadding}`;
  const affterContext = `${fullPadding}${opt.borderVerticalChar}${margin}`;

  let width = 0;
  let body = context
    .map((item) => {
      const { textNoAnsi, text } = parseText(item);
      const length =
        textNoAnsi.length + beforeContext.length + affterContext.length;

      if (length > width) width = length;
      return { textNoAnsi, item: text };
    })
    .map(({ textNoAnsi, item }) => {
      let resultItem = item;
      const length =
        textNoAnsi.length + beforeContext.length + affterContext.length;

      if (length < width) {
        resultItem = `${item}${characterSequence(' ', width - length)}`;
      }

      return `${beforeContext}${resultItem}${affterContext}`;
    });

  let widthLine = 2;
  if (opt.viewMargin) widthLine += 2;

  const hr = [
    margin,
    opt.borderXChar,

    characterSequence(opt.borderHorizonChar, width - widthLine),

    opt.borderXChar,
    margin,
  ].join('');

  const hrOut = padding
    ? [
        margin,
        opt.borderVerticalChar,

        characterSequence(' ', width - widthLine),

        opt.borderVerticalChar,
        margin,
      ].join('')
    : '';

  const titleList = Array.isArray(title) ? title : [title];

  const head = titleList.map((title) => {
    const text = `${fullPadding}${title.context}${fullPadding}`;
    const row = rowText(
      text,
      opt.viewMargin ? width - 2 : width,
      title.textAlign,
      opt.borderVerticalChar
    );
    return `${margin}${row}${margin}`;
  });

  let data: string[] = [];

  if (head.length) {
    data = [...data, hr, hrOut, ...head, hrOut];
  }

  data = [...data, hr, hrOut, ...body, hrOut, hr].filter((v) => !!v);

  if (opt.typeResult === 'array') {
    return data;
  }

  return render(data, false) as string;
}
