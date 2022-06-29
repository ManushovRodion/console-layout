import { tableCol } from './tableCol';
import { TableRowColumn, TableRowOptions } from './types';

function parseOptions(options: TableRowOptions = {}) {
  let { borderChar } = options;
  borderChar = borderChar ? borderChar[0] : '|';

  const { hideOuterBorder } = options;

  return {
    borderChar,
    hideOuterBorder: hideOuterBorder == true,
  };
}

export function tableRow(columns: TableRowColumn[], options?: TableRowOptions) {
  const opt = parseOptions(options);

  const row = columns
    .map((column) => tableCol(column.context, column.width, column.textAlign))
    .join(opt.borderChar);

  if (opt.hideOuterBorder) {
    return row;
  }

  return `${opt.borderChar}${row}${opt.borderChar}`;
}
