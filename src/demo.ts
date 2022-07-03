import { line, render, rowText } from './main';

const context0 = rowText('test', 10);
console.log(context0); // text

const context1 = rowText('test', 10, { textAlign: 'right' });
console.log(context1); //       test

const context2 = rowText('test', 10, { textAlign: 'center', borderChar: 'X' });
console.log(context2); // X  test  X

export function cli() {}
