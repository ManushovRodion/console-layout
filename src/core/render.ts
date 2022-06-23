export function render(items: string[], view = true) {
  const result = items.join('\n');

  if (!view) {
    return result;
  }

  console.log(result);
}
