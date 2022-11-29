export const replaceUrlParam = (original = "", replacer) => {
  const firstIndex = original.indexOf("{");
  const lastIndex = original.indexOf("}");
  return original.replace(original.substring(firstIndex, lastIndex+1), replacer);
}