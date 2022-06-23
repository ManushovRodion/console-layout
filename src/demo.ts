import {
  line,
  //characterSequence,
  table,
  TableBodyCol,
  TableCol,
  // tableCol,
  // tableRow,
  // textCenter,
  // textLeft,
  // textRight,
} from './main';

export function cli() {
  // console.log(['#', textLeft('test', 10), '#'].join(''));
  // console.log(['#', textCenter('test', 10), '#'].join(''));
  // console.log(['#', textCenter('testI', 10), '#'].join(''));
  // console.log(['#', textRight('test', 10), '#'].join(''));

  // console.log(characterSequence('-', 20));

  // console.log(tableCol('test', 12));
  // console.log(tableCol('test', 12, 'center'));
  // console.log(tableCol('test', 12, 'right'));

  // console.log(characterSequence('-', 20));

  const theadCols: TableCol[] = [
    { text: '', length: 5 },
    { text: '', length: 20 },
    { text: 'Информация', length: 51, textAlign: 'center' },
  ];

  const theadCols2: TableCol[] = [
    { text: '№', length: 5, textAlign: 'center' },
    { text: 'Название', length: 20, textAlign: 'center' },
    { text: 'Описание', length: 30 },
    { text: 'Статус', length: 20, textAlign: 'right' },
  ];

  // console.log(tableRow(theadCols));

  console.log(line(20, '-', '#'));
  console.log(line(20));
  console.log(line(20, '-', '#'));

  const tbody: TableBodyCol[][] = [
    [
      { text: '1', textAlign: 'center' },
      { text: 'test' },
      { text: '' },
      { text: `\x1b[32mSuccess!\x1b[0m` },
    ],
    [
      { text: '2', textAlign: 'center' },
      { text: 'test 1' },
      { text: '' },
      { text: 'success' },
    ],
    [
      { text: '3', textAlign: 'center' },
      { text: 'test 2' },
      { text: '' },
      { text: 'success' },
    ],
  ];

  console.log(table([theadCols, theadCols2], tbody));
}
