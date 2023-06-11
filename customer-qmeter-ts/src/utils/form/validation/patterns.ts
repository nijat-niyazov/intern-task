interface Patterns {
  name: RegExp;
  email: RegExp;
  phonenumber: RegExp;
}

export const patterns: Patterns = {
  name: /^[A-Z][a-z]*\s[A-Z][a-z]*$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phonenumber: /^[1-9][0-9]{2,}$/,
};
