### api: [Home](./../../README.md) | [Readme](./../README-EN.md)

# CONSOLE-LAYOUT

- [textLeft](./TEXT-ALIGN-EN.md#-text-left)
- [textRight](./TEXT-ALIGN-EN.md#-text-right)
- [textCenter](./TEXT-ALIGN-EN.md#-text-center)

---

### # TEXT-LEFT

A utility that allows you to form a string of a certain length and place text on the left in this area. If the text does not fit within the line length, then the text is truncated to the specified length.

```ts
import { textLeft } from 'console-layout';

const context0 = textLeft('01234', 10); // |01234     |
console.log(`|${context0}|`);

const context1 = textLeft('0123456789', 10); // |0123456789|
console.log(`|${context1}|`);

const context2 = textLeft('0123456789', 10, 1); // | 012345678|
console.log(`|${context2}|`);

const context3 = textLeft('0123456789', 10, 1, 1); // | 01234567 |
console.log(`|${context3}|`);
```

| Argument | Name         | Type             | Required | Default | Description                                                                                                                                |
| -------- | ------------ | ---------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 1        | context      | string \| number | true     | -       | the text to be linked, in a line                                                                                                           |
| 2        | maxRowLength | number           | true     | -       | forms a string of a certain length on which the text is placed. If the text does not fit, the result is truncated to the specified length. |
| 3        | indentBefore | number           | false    | 0       | additional indent before text                                                                                                              |
| 4        | indentAfter  | number           | false    | 0       | extra padding after text                                                                                                                   |

### # TEXT-RIGHT

A utility that allows you to form a string of a certain length and place text on the right in this area. If the text does not fit within the line length, then the text is truncated to the specified length.

```ts
import { textRight } from 'console-layout';

const context0 = textRight('01234', 10); // |     01234|
console.log(`|${context0}|`);

const context1 = textRight('0123456789', 10); // |0123456789|
console.log(`|${context1}|`);

const context2 = textRight('0123456789', 10, 1); // | 012345678|
console.log(`|${context2}|`);

const context3 = textRight('0123456789', 10, 1, 1); // | 01234567 |
console.log(`|${context3}|`);
```

| Argument | Name         | Type             | Required | Default | Description                                                                                                                                |
| -------- | ------------ | ---------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 1        | context      | string \| number | true     | -       | the text to be linked, in a line                                                                                                           |
| 2        | maxRowLength | number           | true     | -       | forms a string of a certain length on which the text is placed. If the text does not fit, the result is truncated to the specified length. |
| 3        | indentBefore | number           | false    | 0       | additional indent before text                                                                                                              |
| 4        | indentAfter  | number           | false    | 0       | extra padding after text                                                                                                                   |

### # TEXT-CENTER

A utility that allows you to form a string of a certain length and place text in the center in this area. If the text does not fit within the line length, then the text is truncated to the specified length.

```ts
import { textCenter } from 'console-layout';

const context0 = textCenter('01234', 10); // |   01234  |
console.log(`|${context0}|`);

const context1 = textCenter('0123456789', 10); // |0123456789|
console.log(`|${context1}|`);

const context2 = textCenter('0123456789', 10, 1); // | 012345678|
console.log(`|${context2}|`);

const context3 = textCenter('0123456789', 10, 1, 1); // | 01234567 |
console.log(`|${context3}|`);
```

| Argument | Name         | Type             | Required | Default | Description                                                                                                                                |
| -------- | ------------ | ---------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 1        | context      | string \| number | true     | -       | the text to be linked, in a line                                                                                                           |
| 2        | maxRowLength | number           | true     | -       | forms a string of a certain length on which the text is placed. If the text does not fit, the result is truncated to the specified length. |
| 3        | indentBefore | number           | false    | 0       | additional indent before text                                                                                                              |
| 4        | indentAfter  | number           | false    | 0       | extra padding after text                                                                                                                   |

## # Documentation

- [Text Align](./TEXT-ALIGN-EN.md)
  - [textLeft](./TEXT-ALIGN-EN.md#-text-left)
  - [textRight](./TEXT-ALIGN-EN.md#-text-right)
  - [textCenter](./TEXT-ALIGN-EN.md#-text-center)
- [Table](./TABLE-EN.md)
  - [table](./TABLE-EN.md#-table)
  - [tableBorder](./TABLE-EN.md#-table-border)
  - [tableRow](./TABLE-EN.md#-table-row)
  - [tableCol](./TABLE-EN.md#-table-col)
- [Card](./CARD-EN.md)
  - [card](./CARD-EN.md#-card)
- [Other](./OTHER-EN.md)
  - [parseText](./OTHER-EN.md#-parse-text)
  - [rowText](./OTHER-EN.md#-row-text)
  - [characterSequence](./OTHER-EN.md#-character-sequence)
  - [line](./OTHER-EN.md#-line)
  - [render](./OTHER-EN.md#-render)
