export function mapToSize(numberSize: number): string | null {
  switch (numberSize) {
    case 0:
      return "XS";
    case 1:
      return "S";
    case 2:
      return "M";
    case 3:
      return "L";
    case 4:
      return "XL";
    case 5:
      return "XXL";
    default:
      return null;
  }
}
