interface Patterns {
  name: RegExp;
  email: RegExp;
  phoneNumber: RegExp;
}

export const patterns: Patterns = {
  name: /^[A-Z][a-z]{1,}\s[A-Z][a-z]{1,}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phoneNumber: /^[1-9][0-9]{4,}$/,
};
