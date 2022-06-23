import { textCenter, textLeft, textRight } from './main';

export function cli() {
  console.log(['#', textLeft('test', 10), '#'].join(''));
  console.log(['#', textCenter('test', 10), '#'].join(''));
  console.log(['#', textCenter('testI', 10), '#'].join(''));
  console.log(['#', textRight('test', 10), '#'].join(''));
}
