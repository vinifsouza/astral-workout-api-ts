export const toTitleCase = (value: string) => {
  return value
    .split(' ')
    .map((word: string) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};
