import { characterSequence } from '../characterSequence';
import { parseText } from '../parseText';
import { render } from '../render';
import { rowText } from '../rowText';

type CardOptions = {
  borderHorizonChar?: string;
  borderVerticalChar?: string;
  borderXChar?: string;
  typeResult?: 'string' | 'array';
  hidePadding?: boolean;
  viewMargin?: boolean;
};

export type CardTitle = {
  text: string;
  textAlign?: 'left' | 'right' | 'center';
};

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
  const body = context.map((item) => {
    const text = `${beforeContext}${item}${affterContext}`;
    const { fullText, context } = parseText(text, 1000);

    if (fullText.length > width) {
      width = fullText.length;
    }

    return context;
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
    const text = `${fullPadding}${title.text}${fullPadding}`;
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
