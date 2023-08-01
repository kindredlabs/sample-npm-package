export function roundToPrecision(num: number, precision = 2) {
  return Math.round((num + Number.EPSILON) * 10 ** precision) / 10 ** precision;
}

export function minmax(value: number, min: number, max: number) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}
