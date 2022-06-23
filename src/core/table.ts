import { characterSequence } from './characterSequence';
import { render } from './render';
import { tableRow } from './tableRow';

export type TableTheadCol = {
  text: string;
  length: number;
  textAlign?: 'left' | 'right' | 'center';
};

export type TableBodyCol = {
  text: string;
  textAlign?: 'left' | 'right' | 'center';
};

type TableOptions = {
  borderHorizonChar?: string;
  borderVerticalChar?: string;
  borderXChar?: string;
  typeResult?: 'string' | 'array';
};

function parseOptions(options: TableOptions = {}) {
  let { borderHorizonChar } = options;
  if (!borderHorizonChar) borderHorizonChar = '-';

  let { borderVerticalChar } = options;
  if (!borderVerticalChar) borderVerticalChar = '|';

  let { borderXChar } = options;
  if (!borderXChar) borderXChar = '#';

  let { typeResult } = options;
  if (!typeResult) typeResult = 'string';

  return { borderHorizonChar, borderVerticalChar, borderXChar, typeResult };
}

function createHr(
  cols: TableTheadCol[],
  borderChar: string,
  borderXChar: string
) {
  return [
    borderXChar,
    cols
      .map((col) => characterSequence(borderChar, col.length))
      .join(borderXChar),
    borderXChar,
  ].join('');
}

export function table(
  theadCols: TableTheadCol[][],
  tbodyCols: TableBodyCol[][],
  options?: TableOptions
) {
  if (!theadCols?.length) return '';

  const opt = parseOptions(options);
  const nextColThead = theadCols[theadCols.length - 1];

  const hrBefore = createHr(
    theadCols[0],
    opt.borderHorizonChar,
    opt.borderXChar
  );

  const hrAfter = createHr(
    nextColThead,
    opt.borderHorizonChar,
    opt.borderXChar
  );

  const thead = theadCols.map((cols) => tableRow(cols, opt.borderVerticalChar));

  const tbody = tbodyCols.map((cols) => {
    let fullCols = cols;

    if (nextColThead.length < cols.length) {
      fullCols = cols.slice(0, nextColThead.length);
    }

    const colsBody = fullCols.map((col, index) => ({
      ...col,
      length: nextColThead[index].length,
    }));

    return tableRow(colsBody, opt.borderVerticalChar);
  });

  let data: string[] = [];

  if (thead.length) {
    data = [hrBefore, ...thead, hrAfter];
  }

  if (tbody.length) {
    data = [...data, ...tbody, hrAfter];
  }

  if (opt.typeResult === 'array') {
    return data;
  }

  return render(data, false);
}
