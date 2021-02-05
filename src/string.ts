export function removeAccentsToLower(str: string): string {
  var map = {
    a: 'á|à|ã|â|À|Á|Ã|Â',
    e: 'é|è|ê|É|È|Ê',
    i: 'í|ì|î|Í|Ì|Î',
    o: 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
    u: 'ú|ù|û|ü|Ú|Ù|Û|Ü',
    c: 'ç|Ç',
    n: 'ñ|Ñ',
  };

  for (var pattern in map) {
    str = str.replace(new RegExp(map[pattern], 'g'), pattern);
  }

  return str.toLowerCase();
}

export function highlight(
  text: string,
  term: string,
  className?: string
): string {
  const sText = removeAccentsToLower(text);
  const sTerm = removeAccentsToLower(term);
  const length = term.length;
  const pos = sText.indexOf(sTerm);

  return `${text.slice(0, pos)}<b${
    className ? ` class='${className}'` : ''
  }>${text.slice(pos, pos + length)}</b>${text.slice(
    pos + length,
    text.length
  )}`;
}
