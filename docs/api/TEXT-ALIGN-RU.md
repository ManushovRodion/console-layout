### api: [Главная](./../../README.md) | [Readme](./../README-RU.md)

# CONSOLE-LAYOUT

- [textLeft](./TEXT-ALIGN-RU.md#-text-left)
- [textRight](./TEXT-ALIGN-RU.md#-text-right)
- [textCenter](./TEXT-ALIGN-RU.md#-text-center)

---

### # TEXT-LEFT

Утилита, которая позволяет сформировать строку определеной длины и разместить в данной области текст слева. Если текст не помещается в длину строки, то текст обрезается до заданной длины.

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

| Аргумент | Название     | Тип              | Обязательность | По умолчанию | Описание                                                                                                                                 |
| -------- | ------------ | ---------------- | -------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | context      | string \| number | true           | -            | текст, который надо разместить, в строке                                                                                                 |
| 2        | maxRowLength | number           | true           | -            | формирует строку определенной длины, на которой размещается текст. Если текст не помещаетcя, то обрезается результат до указанной длины. |
| 3        | indentBefore | number           | false          | 0            | дополнительный отступ перед текстом                                                                                                      |
| 4        | indentAfter  | number           | false          | 0            | дополнительный отступ после текстом                                                                                                      |

### # TEXT-RIGHT

Утилита, которая позволяет сформировать строку определеной длины и разместить в данной области текст справа. Если текст не помещается в длину строки, то текст обрезается до заданной длины.

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

| Аргумент | Название     | Тип              | Обязательность | По умолчанию | Описание                                                                                                                                 |
| -------- | ------------ | ---------------- | -------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | context      | string \| number | true           | -            | текст, который надо разместить, в строке                                                                                                 |
| 2        | maxRowLength | number           | true           | -            | формирует строку определенной длины, на которой размещается текст. Если текст не помещаетcя, то обрезается результат до указанной длины. |
| 3        | indentBefore | number           | false          | 0            | дополнительный отступ перед текстом                                                                                                      |
| 4        | indentAfter  | number           | false          | 0            | дополнительный отступ после текстом                                                                                                      |

### # TEXT-CENTER

Утилита, которая позволяет сформировать строку определеной длины и разместить в данной области текст по центру. Если текст не помещается в длину строки, то текст обрезается до заданной длины.

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

| Аргумент | Название     | Тип              | Обязательность | По умолчанию | Описание                                                                                                                                 |
| -------- | ------------ | ---------------- | -------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | context      | string \| number | true           | -            | текст, который надо разместить, в строке                                                                                                 |
| 2        | maxRowLength | number           | true           | -            | формирует строку определенной длины, на которой размещается текст. Если текст не помещаетcя, то обрезается результат до указанной длины. |
| 3        | indentBefore | number           | false          | 0            | дополнительный отступ перед текстом                                                                                                      |
| 4        | indentAfter  | number           | false          | 0            | дополнительный отступ после текстом                                                                                                      |

## # Документация

- [Положение текста](./TEXT-ALIGN-RU.md)
  - [textLeft](./TEXT-ALIGN-RU.md#-text-left)
  - [textRight](./TEXT-ALIGN-RU.md#-text-right)
  - [textCenter](./TEXT-ALIGN-RU.md#-text-center)
- [Таблица](./TABLE-RU.md)
  - [table](./TABLE-RU.md#-table)
  - [tableBorder](./TABLE-RU.md#-table-border)
  - [tableRow](./TABLE-RU.md#-table-row)
  - [tableCol](./TABLE-RU.md#-table-col)
- [Карточка](./CARD-RU.md)
  - [card](./CARD-RU.md#-card)
- [Прочие утилиты](./OTHER-RU.md)
  - [parseText](./OTHER-RU.md#-parse-text)
  - [rowText](./OTHER-RU.md#-row-text)
  - [characterSequence](./OTHER-RU.md#-character-sequence)
  - [line](./OTHER-RU.md#-line)
  - [render](./OTHER-RU.md#-render)
