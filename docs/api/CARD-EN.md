### api: [Главная](./../../README.md) | [Readme](./../README-RU.md)

# CONSOLE-LAYOUT

### # CARD

A utility that allows you to draw a card with data. How to draw a card without a hat.

```ts
import { card, CardTitle } from 'console-layout';

const cardContext: string[] = [
  'test test test test test test test test test test test test',
  'test test test test test test',
  'test test test test test test test test test test',
  'test test',
  '',
  'test test test test test test test test test test',
];

const cardTitle: CardTitle[] = [
  // CardTitle || CardTitle[]
  { context: 'NAME', textAlign: 'right' },
  { context: 'v2.12.1', textAlign: 'right' },
];

const context = card(cardContext, cardTitle) as string[];
console.log(context.join('\n'));
```

![demo.png](./../assets/DEMO_CARD.png)

| Argument | Name    | Type                     | Required | Default | Description                                            |
| -------- | ------- | ------------------------ | -------- | ------- | ------------------------------------------------------ |
| 1        | context | string[]                 | true     | -       | an array of strings that will be drawn inside the card |
| 2        | title   | CardTitle \| CardTitle[] | false    | []      | data for rendering the card header                     |
| 3        | options | CardOptions              | false    | -       | card options                                           |

#### тип **CardTitle**

| Key       | Type                         | Required | Default | Description                |
| --------- | ---------------------------- | -------- | ------- | -------------------------- |
| context   | string \| number             | true     | -       | element text               |
| textAlign | 'left'\| 'right' \| 'center' | false    | 'left'  | title position in a column |

#### тип **CardOptions**

| Key                | Type                | Required | Default | Description                                                 |
| ------------------ | ------------------- | -------- | ------- | ----------------------------------------------------------- |
| borderHorizonChar  | string              | false    | '-'     | horizontal border line symbol                               |
| borderVerticalChar | string              | false    | '\|'    | vertical border line symbol                                 |
| borderXChar        | string              | false    | '#'     | symbol of the intersection of vertical and horizontal lines |
| typeResult         | 'string' \| 'array' | false    | 'array' | return type: string or array of strings                     |
| hidePadding        | boolean             | false    | false   | remove padding                                              |
| viewMargin         | boolean             | false    | false   | display margin                                              |

## # Documentation

- [Text Align](./TEXT-ALIGN-EN.md)
- [Table](./TABLE-EN.md)
- [Other](./OTHER-EN.md)
