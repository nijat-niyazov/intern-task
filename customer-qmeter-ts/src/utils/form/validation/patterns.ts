interface Patterns {
  name: RegExp;
  email: RegExp;
  phoneNumber: RegExp;
}

export const patterns: Patterns = {
  name: /^[A-Z][a-z]*\s[A-Z][a-z]*$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phoneNumber: /^[1-9][0-9]*$/,
};
