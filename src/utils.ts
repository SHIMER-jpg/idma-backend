export function sortVariantValues(variantValues: string[]): string[] {
  const sizeRegex = /^(xs|s|m|l|xl|xxl)$/i; // Case-insensitive regex for sizes

  return variantValues.sort((a, b) => {
    const aIsSize = sizeRegex.test(a);
    const bIsSize = sizeRegex.test(b);

    // If a is a size and b is not, place a before b
    if (aIsSize && !bIsSize) return -1;

    // If b is a size and a is not, place b before a
    if (bIsSize && !aIsSize) return 1;

    // If both are sizes, sort based on their order in the regex pattern
    if (aIsSize && bIsSize)
      return a.toLowerCase().localeCompare(b.toLowerCase());

    // If neither are sizes, sort them lexicographically
    return a.localeCompare(b);
  });
}
