import { tableCol } from './tableCol';

export type TableCol = {
  text: string;
  length: number;
  textAlign?: 'left' | 'right' | 'center';
};

export function tableRow(cols: TableCol[], borderChar = '|') {
  const row = cols
    .map((col) => tableCol(col.text, col.length, col.textAlign))
    .join(borderChar);

  return `${borderChar}${row}${borderChar}`;
}
