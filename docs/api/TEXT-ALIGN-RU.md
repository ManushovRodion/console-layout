### api: [Главная](./../../README.md) | [Readme](./../README-RU.md)

# CONSOLE-LAYOUT

- [textLeft](./api/TEXT-ALIGN-RU.md#text-left)
- [textCenter](./api/TEXT-ALIGN-RU.md#text-center)
- [textRight](./api/TEXT-ALIGN-RU.md#text-right)

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

- [Положение текста](./api/TEXT-ALIGN-RU.md)
  - [textLeft](./api/TEXT-ALIGN-RU.md#text-left)
  - [textCenter](./api/TEXT-ALIGN-RU.md#text-center)
  - [textRight](./api/TEXT-ALIGN-RU.md#text-right)
- [Таблица](./api/TABLE-RU.md)
  - [table](./api/TABLE-RU.md#table)
  - [tableBorder](./api/TABLE-RU.md#table-border)
  - [tableRow](./api/TABLE-RU.md#table-row)
  - [tableCol](./api/TABLE-RU.md#table-col)
- [Карточка](./api/CARD-RU.md)
  - [card](./api/CARD-RU.md#card)
- [Прочие утилиты](./api/OTHER-RU.md)
  - [parseText](./api/OTHER-RU.md#parse-text)
  - [rowText](./api/OTHER-RU.md#row-text)
  - [characterSequence](./api/OTHER-RU.md#character-sequence)
  - [line](./api/OTHER-RU.md#line)
  - [render](./api/OTHER-RU.md#render)
