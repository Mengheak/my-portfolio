export function yearsFromDate(pastDate: Date): number {
  const now = new Date();
  const diff = now.getTime() - pastDate.getTime();
  const years = diff / (1000 * 60 * 60 * 24 * 365.25); // includes leap years
  return Math.floor(years);
}
