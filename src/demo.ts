import { TableColumn, TableItem, TableItemGroup } from './core/table/types';
import { table } from './main';



const columns: TableColumn[][] = [
  [
    { name: '', width: 5 },
    { name: 'info'.toUpperCase(), width: 92, textAlign: 'center' }, // 90 + 2 border
  ],
  [
    { name: '#', width: 5, textAlign: 'center' },
    { name: 'name', width: 30 },
    { name: 'description', width: 40 },
    { name: 'status', width: 20, textAlign: 'right' },
  ],
];

const items: TableItem[][] = [1, 2, 3, 4, 5].map((data) => [
  { context: (data - 1).toString(), textAlign: 'center' },
  { context: `random name ${data}` },
  { context: `random description ${data}` },
  { context: `random status ${data}`, textAlign: 'right' },
]);

const group: TableItemGroup[] = [{ name: 'group'.toUpperCase() }];

const contextTable = table(columns, [
  ...group,
  ...items,
  ...group,
  ...items,
]) as string[];

const context = contextTable.join('\n');
console.log(context);

export function cli() {}
