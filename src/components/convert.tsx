export default function HexToRGB(hex: string) {
  if (hex === "") {
    return "";
  } else {
    const r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}
