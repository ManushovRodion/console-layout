import {
  card,
  CardTitle,
  render,
  table,
  TableBodyCol,
  TableBodyGroupRow,
  TableTheadCol,
} from './main';

export function cli() {
  const theadCols: TableTheadCol[][] = [
    [
      { text: '#', length: 5, textAlign: 'center' },
      { text: 'name', length: 30 },
      { text: 'example', length: 30, textAlign: 'center' },
    ],
  ];

  const tbodyCols: (TableBodyCol[] | TableBodyGroupRow)[] = [
    { groupName: 'text align'.toUpperCase() },
    [
      { text: '1', textAlign: 'center' },
      { text: 'textLeft' },
      { text: 'text' },
    ],
    [
      { text: '2', textAlign: 'center' },
      { text: 'textCenter' },
      { text: 'text', textAlign: 'center' },
    ],
    [
      { text: '3', textAlign: 'center' },
      { text: 'textRight' },
      { text: 'text', textAlign: 'right' },
    ],
  ];

  const contextTable = table(theadCols, tbodyCols, {
    hideOuterBorderHorizon: true,
    hideOuterBorderVertical: true,
    borderXChar: ' ',
  }) as string[];

  const cardTitle: CardTitle[] = [
    {
    text: 'Demo'.toUpperCase(),
    textAlign: 'right',
  },
  {
    text: 'v1.23.1'.toUpperCase(),
    textAlign: 'right',
  }
  ];

  const contextCard = card(contextTable, cardTitle);

  render(contextCard);
}
