import { CardTitle } from './core/card/types';
import { card } from './main';


const cardContext: string[] = [
  'test test test test test test test test test test',
  'test test test test',
  'test test test test test test test test',
  'test test',
  '',
  'test test test test test test test'
];

const cardTitle: CardTitle[] = [ // CardTitle || CardTitle[]
  { context: 'NAME', textAlign: 'right' },
  { context: 'v2.12.1', textAlign: 'right' },
];


const context= card(cardContext, cardTitle) as string[];

const fullContext = context.map(v => [v, v].join('    '))
console.log(fullContext.join('\n'));

export function cli() {}
