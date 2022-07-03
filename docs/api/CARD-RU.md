### api: [Главная](./../../README.md) | [Readme](./../README-RU.md)

# CONSOLE-LAYOUT

- [card](./api/CARD-RU.md#card)

---

### # CARD

Утилита, которая позволяет отрисовать карточку с данными. Позволяет рисовать карточку без шапки.

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

| Аргумент | Название | Тип                      | Обязательность | По умолчанию | Описание                                                   |
| -------- | -------- | ------------------------ | -------------- | ------------ | ---------------------------------------------------------- |
| 1        | context  | string[]                 | true           | -            | массив строк, которые будет отрисовываться внутри карточки |
| 2        | title    | CardTitle \| CardTitle[] | false          | []           | данные для отрисовки заголовка карточки                    |
| 3        | options  | CardOptions              | false          | -            | опции карточки                                             |

#### тип **CardTitle**

| Ключ      | Tип                          | Обязательность | По умолчанию | Описание                     |
| --------- | ---------------------------- | -------------- | ------------ | ---------------------------- |
| context   | string \| number             | true           | -            | текст элемента               |
| textAlign | 'left'\| 'right' \| 'center' | false          | 'left'       | положение названия в колонке |

#### тип **CardOptions**

| Ключ               | Tип                 | Обязательность | По умолчанию | Описание                                               |
| ------------------ | ------------------- | -------------- | ------------ | ------------------------------------------------------ |
| borderHorizonChar  | string              | false          | '-'          | символ горизонтальной линии границы                    |
| borderVerticalChar | string              | false          | '\|'         | символ вертикальной линии границы                      |
| borderXChar        | string              | false          | '#'          | символ пересечения вертикальной и горизонтальной линий |
| typeResult         | 'string' \| 'array' | false          | 'array'      | вид возвращаемого значения: строка или массив строк    |
| hidePadding        | boolean             | false          | false        | убрать внутренний отступ                               |
| viewMargin         | boolean             | false          | false        | отобразить внешний отступ                              |

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
