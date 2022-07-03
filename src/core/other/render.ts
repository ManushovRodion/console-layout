export function render(context: string[] | string, view = true) {
  const result = typeof context === 'string' ? context : context.join('\n');

  if (!view) {
    return result;
  }

  console.log(result);
}
