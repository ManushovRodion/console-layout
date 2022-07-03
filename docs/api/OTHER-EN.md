### api: [Home](./../../README.md) | [Readme](./../README-EN.md)

# CONSOLE-LAYOUT

- [parseText](./OTHER-EN.md#-parse-text)
- [rowText](./OTHER-EN.md#-row-text)
- [characterSequence](./OTHER-EN.md#-character-sequence)
- [line](./OTHER-EN.md#-line)
- [render](./OTHER-EN.md#-render)

---

### # PARSE-TEXT

A utility that can read your text and return new text and new text without ANSI characters, which will make it possible to correctly calculate the length of your text for console design.
Using the utilities of this library, you do not need to run your text through this utility - this is done for you.

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

| Argument | Name    | Type             | Required | Default | Description                       |
| -------- | ------- | ---------------- | -------- | ------- | --------------------------------- |
| 1        | context | string \| number | true     | -       | the text to be placed on the line |
| 2        | options | ParseTextOptions | false    | -       | utility settings                  |

#### тип **ParseTextOptions**

| Key          | Type   | Required | Default     | Description                                                           |
| ------------ | ------ | -------- | ----------- | --------------------------------------------------------------------- |
| maxLength    | number | false    | text length | restriction on the maximum length of the text - the excess is cut off |
| indentBefore | number | false    | 0           | additional indent before text                                         |
| indentAfter  | number | false    | 0           | extra padding after text                                              |

## # ROW-TEXT

A utility that creates a string of N length and places text on it at the desired position. If necessary, it can wrap the string in the desired character.

```ts
import { rowText } from 'console-layout';

const context0 = rowText('test', 10);
console.log(context0); // text

const context1 = rowText('test', 10, { textAlign: 'right' });
console.log(context1); //       test

const context2 = rowText('test', 10, { textAlign: 'center', borderChar: 'X' });
console.log(context2); // X  test  X
```

| Argument | Name    | Type             | Required | Default | Description                                       |
| -------- | ------- | ---------------- | -------- | ------- | ------------------------------------------------- |
| 1        | text    | string \| number | true     | -       | the text to be placed on the line                 |
| 2        | length  | number           | true     | -       | the length of the line on which to place the text |
| 3        | options | RowTextOptions   | false    | -       | utility settings                                  |

#### тип **RowTextOptions**

| Key        | Type                          | Required | Default | Description       |
| ---------- | ----------------------------- | -------- | ------- | ----------------- |
| textAlign  | 'left' \| 'right' \| 'center' | false    | 'left'  | text position     |
| borderChar | string                        | false    | -       | character to wrap |

### # CHARACTER-SEQUENCE

A utility that returns a string in which N is the sequence of characters we need.

```ts
import { characterSequence } from 'console-layout';

const context = characterSequence('*', 10);
console.log(context); // **********
```

| Argument | Name   | Type   | Required | Default | Description                          |
| -------- | ------ | ------ | -------- | ------- | ------------------------------------ |
| 1        | char   | string | true     | -       | character to repeat                  |
| 2        | length | number | true     | -       | how many times to repeat a character |

### # LINE

A utility that returns a line of the desired length, allowing you to wrap it with the desired character.

```ts
import { line } from 'console-layout';

const context0 = line(10, '-');
console.log(context0); // ----------

const context1 = line(10, '-', '|');
console.log(context1); // |--------|
```

| Argument | Name       | Type   | Required | Default | Description                |
| -------- | ---------- | ------ | -------- | ------- | -------------------------- |
| 1        | length     | number | true     | -       | line length                |
| 2        | char       | string | true     | -       | line symbol                |
| 3        | borderChar | string | false    | -       | character to wrap the line |

### # RENDER

A utility that generates a summary line for the console and displays it. you can turn off the output to the console and get the final line that it generated.

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

| Argument | Name    | Type               | Required | Default | Description        |
| -------- | ------- | ------------------ | -------- | ------- | ------------------ |
| 1        | context | string \| string[] | true     | -       | data               |
| 2        | view    | boolean            | false    | true    | output to console? |

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
