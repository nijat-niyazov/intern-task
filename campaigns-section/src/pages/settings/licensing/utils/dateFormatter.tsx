export const dateFormatter = (date:Date) => {
  const formatted = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return formatted;
};
