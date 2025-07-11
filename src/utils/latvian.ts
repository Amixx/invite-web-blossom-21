export const getLatvianPlural = (
  number: number,
  singular: string,
  plural: string
) => {
  // Latvian plural rules: singular form for 1 and numbers ending in 1 (except 11)
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;
  
  if (number === 1 || (lastDigit === 1 && lastTwoDigits !== 11)) {
    return singular;
  }
  
  return plural;
};
