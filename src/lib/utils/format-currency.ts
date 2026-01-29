export function formatCurrency(
  amount: number,
  currencySymbol: string = "₦"
): string {
  return `${currencySymbol}${amount.toLocaleString("en-US")}`;
}
