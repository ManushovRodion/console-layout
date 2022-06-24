export function render(items: string[] | string, view = true) {
  const result = typeof items === 'string' ? items : items.join('\n');

  if (!view) {
    return result;
  }

  console.log(result);
}
