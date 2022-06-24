import {
  line,
  //characterSequence,
  table,
  TableBodyCol,
  TableBodyGroupRow,
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


  const theadCols2: TableCol[] = [
    { text: '№', length: 5, textAlign: 'center' },
    { text: 'Название', length: 20 },
    { text: 'Описание', length: 30 },
    { text: 'Статус', length: 20, textAlign: 'right' },
  ];

  // console.log(tableRow(theadCols));

  // console.log(line(20, '-', '#'));
  // console.log(line(20));
  // console.log(line(20, '-', '#'));

  const tbody: (TableBodyCol[] | TableBodyGroupRow)[] = [
    [
      { text: '1', textAlign: 'center' },
      { text: 'test' },
      { text: '' },
      { text: `\x1b[32mSuccess!\x1b[0m` },
    ],
    {
      groupName: 'GROUP',
      textAlign: 'center'
    },
    [
      { text: '1', textAlign: 'center' },
      { text: 'test 1' },
      { text: '' },
      { text: 'success' },
    ],
    [
      { text: '2', textAlign: 'center' },
      { text: 'test 2' },
      { text: '' },
      { text: 'success', textAlign: 'right' },
    ],
  ];

  console.log(
    table([ theadCols2], tbody, {
    })
  );
}
