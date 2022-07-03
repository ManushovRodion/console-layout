import {
  TableBorderOptions,
  TableColumn,
  TableItem,
  TableItemGroup,
  TableOptions,
  TableRowColumn,
  TableRowOptions,
} from './types';
import { tableRow } from './tableRow';
import { tableBorder } from './tableBorder';
import { render } from '../other/render';
import { line } from '../other/line';
import { rowText } from '../other/rowText';

function parseOptions(options: TableOptions = {}) {
  let { borderHorizonChar } = options;
  borderHorizonChar = borderHorizonChar ? borderHorizonChar[0] : '-';

  let { borderVerticalChar } = options;
  borderVerticalChar = borderVerticalChar ? borderVerticalChar[0] : '|';

  let { borderXChar } = options;
  borderXChar = borderXChar ? borderXChar[0] : '#';

  let { typeResult } = options;
  if (!typeResult) typeResult = 'array';

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
  columns: TableColumn[][],
  items: (TableItem[] | TableItemGroup)[],
  options?: TableOptions
) {
  const opt = parseOptions(options);

  if (!columns?.length) {
    return opt.typeResult === 'array' ? [] : '';
  }

  const nextColumn = columns[columns.length - 1];

  const maxLengthRow =
    nextColumn.reduce((res, col) => res + col.width, 0) + nextColumn.length + 1;

  const optionsBorder: TableBorderOptions = {
    char: opt.borderHorizonChar,
    xChar: opt.borderXChar,
    hideOuterXChar: opt.hideOuterBorderVertical,
  };

  const borderBefore = tableBorder(
    columns[0].map((col) => col.width),
    optionsBorder
  );

  const borderAfter = tableBorder(
    nextColumn.map((col) => col.width),
    optionsBorder
  );

  const optionsRow: TableRowOptions = {
    borderChar: opt.borderVerticalChar,
    hideOuterBorder: opt.hideOuterBorderVertical,
  };

  const thead = columns.map((cols) =>
    tableRow(
      cols.map((v) => ({ ...v, context: v.name })),
      optionsRow
    )
  );

  const tbody: string[] = [];
  items.forEach((cols) => {
    if (!Array.isArray(cols)) {
      const { name, textAlign } = cols;
      const border = opt.hideOuterBorderVertical ? '' : opt.borderVerticalChar;
      const length = opt.hideOuterBorderVertical
        ? maxLengthRow - 2
        : maxLengthRow;

      const hr = line(length, ' ', border);
      const row = rowText(` ${name} `, length, {
        textAlign,
        borderChar: border,
      });

      tbody.push(hr);
      tbody.push(row);
      tbody.push(hr);
      return;
    }

    let fullCols = cols;

    if (nextColumn.length < cols.length) {
      fullCols = cols.slice(0, nextColumn.length);
    }

    const colsBody: TableRowColumn[] = fullCols.map((col, index) => ({
      ...col,
      width: nextColumn[index].width,
    }));

    const row = tableRow(colsBody, optionsRow);

    tbody.push(row);
  });

  let data: string[] = [];

  if (thead.length) {
    if (!opt.hideOuterBorderHorizon) data.push(borderBefore);
    data = [...data, ...thead, borderAfter];
  }

  if (tbody.length) {
    data = [...data, ...tbody];
    if (!opt.hideOuterBorderHorizon) data.push(borderAfter);
  }

  if (opt.typeResult === 'array') {
    return data;
  }

  return render(data, false) as string;
}
