import { render } from '../render';
import { tableRow } from './tableRow';
import { tableHr } from './tableHr';
import { line } from '../line';

export type TableTheadCol = {
  text: string;
  length: number;
  textAlign?: 'left' | 'right' | 'center';
};

export type TableBodyCol = {
  text: string;
  textAlign?: 'left' | 'right' | 'center';
};

export type TableBodyGroupRow = {
  groupName: string;
  textAlign?: 'left' | 'right' | 'center';
};

type TableOptions = {
  borderHorizonChar?: string;
  borderVerticalChar?: string;
  borderXChar?: string;
  typeResult?: 'string' | 'array';
  hideOuterBorderHorizon?: boolean;
  hideOuterBorderVertical?: boolean;
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

  const { hideOuterBorderHorizon, hideOuterBorderVertical } = options;

  return {
    borderHorizonChar,
    borderVerticalChar,
    borderXChar,
    typeResult,
    hideOuterBorderHorizon: hideOuterBorderHorizon === true,
    hideOuterBorderVertical: hideOuterBorderVertical === true,
  };
}

export function table(
  theadCols: TableTheadCol[][],
  tbodyCols: (TableBodyCol[] | TableBodyGroupRow)[],
  options?: TableOptions
) {
  const opt = parseOptions(options);

  if (!theadCols?.length) {
    return opt.typeResult === 'array' ? [] : '';
  }

  const nextColThead = theadCols[theadCols.length - 1];
  const maxLengthRow =
    nextColThead.reduce((res, col) => res + col.length, 0) +
    nextColThead.length +
    1;

  const hrBefore = tableHr(
    theadCols[0].map((col) => col.length),
    opt.borderHorizonChar,
    opt.borderXChar,
    opt.hideOuterBorderVertical
  );

  const hrAfter = tableHr(
    nextColThead.map((col) => col.length),
    opt.borderHorizonChar,
    opt.borderXChar,
    opt.hideOuterBorderVertical
  );

  const thead = theadCols.map((cols) =>
    tableRow(cols, opt.borderVerticalChar, opt.hideOuterBorderVertical)
  );

  const tbody = tbodyCols.map((cols) => {
    if (!Array.isArray(cols)) {
      const { groupName, textAlign } = cols;
      const hr = line(
        maxLengthRow,
        ' ',
        opt.hideOuterBorderVertical ? '' : opt.borderVerticalChar
      );
      const col = {
        text: groupName,
        length: maxLengthRow,
        textAlign: textAlign,
      };
      const row = tableRow(
        [col],
        opt.borderVerticalChar,
        opt.hideOuterBorderVertical
      );

      return render([hr, row, hr], false) as string;
    }

    let fullCols = cols;

    if (nextColThead.length < cols.length) {
      fullCols = cols.slice(0, nextColThead.length);
    }

    const colsBody = fullCols.map((col, index) => ({
      ...col,
      length: nextColThead[index].length,
    }));

    return tableRow(
      colsBody,
      opt.borderVerticalChar,
      opt.hideOuterBorderVertical
    );
  });

  let data: string[] = [];

  if (thead.length) {
    if (!opt.hideOuterBorderHorizon) data.push(hrBefore);
    data = [...data, ...thead, hrAfter];
  }

  if (tbody.length) {
    data = [...data, ...tbody];
    if (!opt.hideOuterBorderHorizon) data.push(hrAfter);
  }

  if (opt.typeResult === 'array') {
    return data;
  }

  return render(data, false);
}
