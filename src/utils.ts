export function randomNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function px(num: number): string {
  return `${num}px`
}

export function pct(num: number): string {
  return `${num}%`
}
