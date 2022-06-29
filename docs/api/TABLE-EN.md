### api: [Главная](./../../README.md) | [Назад](./../README-RU.md)

# CONSOLE-LAYOUT

### # TABLE

The main utility that allows you to assemble the tablet in the console. There are auxiliary utilities that create their own version of the table. Arrays of strings are stored by default.

```ts
import { table, TableColumn, TableItem, TableItemGroup } from 'console-layout';

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
```

![demo.png](./../assets/DEMO_TABLE.png)

| Argument | Name    | Type                            | Required | Default | Description                                                               |
| -------- | ------- | ------------------------------- | -------- | ------- | ------------------------------------------------------------------------- |
| 1        | columns | TableColumn[][]                 | true     | -       | two-dimensional array with table column options                           |
| 2        | items   | TableItem[][], TableItemGroup[] | true     | -       | list of elements for the table (may contain both date and group elements) |
| 3        | options | TableOptions                    | false    | -       | additional options for the table                                          |

#### тип **TableColumn**

| Key       | Type                       | Required | Default | Description                |
| --------- | -------------------------- | -------- | ------- | -------------------------- |
| name      | string                     | true     | -       | column name                |
| width     | number                     | true     | -       | column width               |
| textAlign | 'left', 'right' , 'center' | false    | 'left'  | title position in a column |

#### тип **TableItem**

| Key       | Type                       | Required | Default | Description                  |
| --------- | -------------------------- | -------- | ------- | ---------------------------- |
| context   | string, number             | true     | -       | element text                 |
| textAlign | 'left', 'right' , 'center' | false    | 'left'  | position of text in a column |

#### тип **TableItemGroup**

| Key       | Type                       | Required | Default | Description         |
| --------- | -------------------------- | -------- | ------- | ------------------- |
| name      | string, number             | true     | -       | group text          |
| textAlign | 'left', 'right' , 'center' | false    | 'left'  | group name position |

#### тип **TableOptions**

| Key                     | Type               | Required | Default | Description                                                 |
| ----------------------- | ------------------ | -------- | ------- | ----------------------------------------------------------- |
| borderHorizonChar       | string             | false    | '-'     | horizontal border line symbol                               |
| borderVerticalChar      | string             | false    | '\|'    | vertical border line symbol                                 |
| borderXChar             | string             | false    | '#'     | symbol of the intersection of vertical and horizontal lines |
| typeResult              | 'string' , 'array' | false    | 'array' | return type: string or array of strings                     |
| hideOuterBorderHorizon  | boolean            | false    | false   | remove the horizontal line                                  |
| hideOuterBorderVertical | boolean            | false    | false   | remove the vertical line                                    |

### # TABLE-BORDER

An additional table utility that allows you to create a border for a table.

```ts
import { tableBorder } from 'console-layout';

const context0 = tableBorder([8]);
console.log(context0); // #--------#

const context1 = tableBorder([8], { char: '*', xChar: 'X' });
console.log(context1); // X********X

const context2 = tableBorder([8], { xChar: 'X', hideOuterXChar: true });
console.log(context2); // --------

const context3 = tableBorder([2, 4, 6]);
console.log(context3); // #--#----#------#
```

| Argument | Name    | Type               | Required | Default | Description       |
| -------- | ------- | ------------------ | -------- | ------- | ----------------- |
| 1        | width   | number[]           | true     | -       | array of segments |
| 2        | options | TableBorderOptions | false    | -       | utility options   |

#### тип **TableBorderOptions**

| Key             | Type    | Required | Default | Description                                 |
| --------------- | ------- | -------- | ------- | ------------------------------------------- |
| char            | string  | false    | '-'     | character to be drawn                       |
| xChar           | string  | false    | '#'     | symbol that is located between the segments |
| hideOuterBorder | boolean | false    | false   | hide outer column border symbols            |

### # TABLE-ROW

An additional table utility that allows you to create a series of columns for a table.

```ts
import { tableRow, TableRowColumn } from 'console-layout';

const columns: TableRowColumn[] = [
  { context: 'random text 1', width: 30 },
  { context: 'random status 1', width: 30, textAlign: 'right' },
];

const context0 = tableRow(columns);
console.log(context0); // | random text 1                |              random status 1 |

const context1 = tableRow(columns, { borderChar: 'X' });
console.log(context1); // X random text 1                X              random status 1 X

const context2 = tableRow(columns, { hideOuterBorder: true });
console.log(context2); //  random text 1                |              random status 1

const context3 = tableRow(columns, { hideOuterBorder: true, borderChar: 'X' });
console.log(context3); //  random text 1                X              random status 1
```

| Argument | Name    | Type             | Required | Default | Description     |
| -------- | ------- | ---------------- | -------- | ------- | --------------- |
| 1        | columns | TableRowColumn[] | true     | -       | column array    |
| 2        | options | TableRowOptions  | false    | -       | utility options |

#### тип **TableRowColumn**

| Key       | Type                       | Required | Default | Description                  |
| --------- | -------------------------- | -------- | ------- | ---------------------------- |
| context   | string, number             | true     | -       | column content               |
| width     | number                     | true     | -       | column width in characters   |
| textAlign | 'left', 'right' , 'center' | false    | 'left'  | position of text in a column |

#### тип **TableRowOptions**

| Key             | Type    | Required | Default | Description                      |
| --------------- | ------- | -------- | ------- | -------------------------------- |
| borderChar      | string  | false    | '\|'    | column border symbol             |
| hideOuterBorder | boolean | false    | false   | hide outer column border symbols |

### # TABLE-COL

An additional table utility that allows you to generate data for a table column. It must be borne in mind that it does not set external boundaries.

```ts
import { tableCol } from 'console-layout';

const context = [
  '',
  tableCol('text', 10),
  tableCol('text', 10, 'center'),
  tableCol('text', 10, 'right'),
  '',
].join('|');

console.log(context); // | text     |   text   |     text |
```

| Argument | Name      | Type                       | Required | Default | Description                  |
| -------- | --------- | -------------------------- | -------- | ------- | ---------------------------- |
| 1        | context   | string, number             | true     | -       | column content               |
| 2        | width     | number                     | true     | -       | column width                 |
| 3        | textAlign | 'left', 'right' , 'center' | false    | 'left'  | position of text in a column |

## # Documentation

- [Text Align](./api/TEXT-ALIGN-EN.md)
- [Card](./api/CARD-EN.md)
- [Other](./api/OTHER-EN.md)
