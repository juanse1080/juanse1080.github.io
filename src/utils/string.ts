export const extractContentWithinTags = (input: string) => {
  // Crear una expresión regular que capture cualquier etiqueta y el texto fuera de etiquetas
  const regex = /<(\w+)>(.*?)<\/\1>|([^<>]+)/g;
  let matches;
  const results = [];

  // Buscar todas las coincidencias
  while ((matches = regex.exec(input)) !== null) {
    if (matches[1] !== undefined) {
      // Si hay una captura en el primer grupo, es contenido dentro de una etiqueta
      results.push({ tag: matches[1], content: matches[2] });
    } else if (matches[3] !== undefined) {
      // Si no, es contenido fuera de etiquetas
      results.push({ content: matches[3] });
    }
  }

  return results;
};
