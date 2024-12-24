export const getRandomKeywords = (
  keywords: string[],
  count: number,
): string[] => {
  const shuffled = [...keywords].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
