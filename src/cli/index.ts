import { message } from '@core';

export function cli(process: NodeJS.Process) {
  const argv = process.argv.slice(2);

  message(argv.join(', '));
}
