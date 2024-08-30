export const replaceVariable = (
  textTemplate: string,
  variableName: string,
  value: string,
) => {
  const pattern = new RegExp(`{{\\s*${variableName}\\s*}}`, 'g');
  return textTemplate.replace(pattern, value);
};
