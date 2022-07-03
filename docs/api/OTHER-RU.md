### api: [Главная](./../../README.md) | [Readme](./../README-RU.md)

# CONSOLE-LAYOUT

- [parseText](./OTHER-RU.md#-parse-text)
- [rowText](./OTHER-RU.md#-row-text)
- [characterSequence](./OTHER-RU.md#-character-sequence)
- [line](./OTHER-RU.md#-line)
- [render](./OTHER-RU.md#-render)

---

### # PARSE-TEXT

Утилита, которая может прочитать ваш текст и вернуть новый текст и новый текст без ANSI символов, что даст возможность корректно посчитать длину вашего текста для построения дизайна консоли.
Используя утилиты данной библиотеки не надо прогонять ваш текст через данную утилиту - это делается за вас.

```ts
import { parseText } from 'console-layout';

const { text: context0 } = parseText('text');
console.log(context0); // text

const { text: context1 } = parseText(100);
console.log(context1); // 100

const { text: context2 } = parseText('text slice', { maxLength: 4 });
console.log(context2); // text

const { text: context3 } = parseText('text slice', {
  maxLength: 4,
  indentBefore: 1,
  indentAfter: 1,
});
console.log(context3); //  te

const { text: context4, textNoAnsi } = parseText('\x1b[32mANSI\x1b[0m');
console.log(context4); //  ANSI
console.log(context4.length); //  13
console.log(textNoAnsi.length); //  4
```

| Аргумент | Название | Тип              | Обязательность | По умолчанию | Описание                                 |
| -------- | -------- | ---------------- | -------------- | ------------ | ---------------------------------------- |
| 1        | context  | string \| number | true           | -            | текст, который надо разместить, в строке |
| 2        | options  | ParseTextOptions | false          | -            | настройки утилиты                        |

#### тип **ParseTextOptions**

| Ключ         | Tип    | Обязательность | По умолчанию | Описание                                                    |
| ------------ | ------ | -------------- | ------------ | ----------------------------------------------------------- |
| maxLength    | number | false          | длина текст  | ограничение на максимальну длину текста - лишнее отрезается |
| indentBefore | number | false          | 0            | дополнительный отступ перед текстом                         |
| indentAfter  | number | false          | 0            | дополнительный отступ после текстом                         |

## # ROW-TEXT

Утилита, которая создает строку N длины и размещает на ней текст, в нужной позиции. При необходимости может обернуть строку в нужный символ.

```ts
import { rowText } from 'console-layout';

const context0 = rowText('test', 10);
console.log(context0); // text

const context1 = rowText('test', 10, { textAlign: 'right' });
console.log(context1); //       test

const context2 = rowText('test', 10, { textAlign: 'center', borderChar: 'X' });
console.log(context2); // X  test  X
```

| Аргумент | Название | Тип              | Обязательность | По умолчанию | Описание                                         |
| -------- | -------- | ---------------- | -------------- | ------------ | ------------------------------------------------ |
| 1        | text     | string \| number | true           | -            | текст, который надо разместить, в строке         |
| 2        | length   | number           | true           | -            | длина строки, на которой надо разместитить текст |
| 3        | options  | RowTextOptions   | false          | -            | настройки утилиты                                |

#### тип **RowTextOptions**

| Ключ       | Tип                           | Обязательность | По умолчанию | Описание                     |
| ---------- | ----------------------------- | -------------- | ------------ | ---------------------------- |
| textAlign  | 'left' \| 'right' \| 'center' | false          | 'left'       | положение текста             |
| borderChar | string                        | false          | -            | символ которым надо обернуть |

### # CHARACTER-SEQUENCE

Утилита, которая возвращает сроку, в которой N последовательность нужных нам символов.

```ts
import { characterSequence } from 'console-layout';

const context = characterSequence('*', 10);
console.log(context); // **********
```

| Аргумент | Название | Тип    | Обязательность | По умолчанию | Описание                      |
| -------- | -------- | ------ | -------------- | ------------ | ----------------------------- |
| 1        | char     | string | true           | -            | символ который надо повторить |
| 2        | length   | number | true           | -            | сколько раз повторить символ  |

### # LINE

Утилита, которая возвращает линию нужной длины, позволив обернуть ее нужными символом.

```ts
import { line } from 'console-layout';

const context0 = line(10, '-');
console.log(context0); // ----------

const context1 = line(10, '-', '|');
console.log(context1); // |--------|
```

| Аргумент | Название   | Тип    | Обязательность | По умолчанию | Описание                           |
| -------- | ---------- | ------ | -------------- | ------------ | ---------------------------------- |
| 1        | length     | number | true           | -            | длина линии                        |
| 2        | char       | string | true           | -            | символ линии                       |
| 3        | borderChar | string | false          | -            | символ которым надо обернуть линию |

### # RENDER

Утилита, которая формирует итоговую строку, для консоли и отображает ее. можно отключить вывод в консоль и получить итоговую строку, что он сформировал.

```ts
import { render } from 'console-layout';

render('test');
// test

render(['test', 'test']);
// test
// test

const context = render('test', false);
console.log(context);
// test
```

| Аргумент | Название | Тип                | Обязательность | По умолчанию | Описание           |
| -------- | -------- | ------------------ | -------------- | ------------ | ------------------ |
| 1        | context  | string \| string[] | true           | -            | данные             |
| 2        | view     | boolean            | false          | true         | вывести в консоль? |

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
