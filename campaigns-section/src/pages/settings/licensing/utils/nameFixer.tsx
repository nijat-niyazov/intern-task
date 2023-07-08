export const nameFixer = (name: string) => {
  const fixedName = name.slice(0, 1).toUpperCase() + name.slice(1);
  return fixedName;
};
