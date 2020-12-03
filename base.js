export function distanceFromTwoPoint ([x1, y1], [x2, y2]) {
  return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
}

export function distanceFromTwoPointByManhattan ([x1, y1], [x2, y2]) {
  return Math.abs(x2 - x1) + Math.abs(y2 - y1)
}
