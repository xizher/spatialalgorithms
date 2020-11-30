/**
 * 判断多边形方向
 * @param {number[][][]} coordinates 多边形坐标串
 * @returns {-1 | 1} -1 为顺时针方向，1为逆时针方向
 */
export function polygonDirection (coordinates) {
  let [yminIndex, yminValue] = [-1, Number.MAX_VALUE] // 寻找y坐标值最小的顶点索引
  coordinates[0].forEach(([, y], i) => {
    if (y < yminValue) {
      yminValue = y
      yminIndex = i
    }
  })
  // 算法公式计算
  const count = coordinates[0].length
  const [x1, y1] = coordinates[0][(yminIndex + count - 1) % count]
  const [x2, y2] = coordinates[0][(yminIndex + count) % count]
  const [x3, y3] = coordinates[0][(yminIndex + count + 1) % count]
  const K = (x2 - x1) * (y3 - y2) - (x3 - x2) * (y2 - y1)
  if (K > 0) { // 逆时针
    return 1
  } else if (K < 0) { // 顺时针
    return -1
  }
}

/**
 * 判定多边形顶点凹凸性
 * @param {number[][][]} coordinates 多边形坐标串
 * @param {[number, number]} xy xy坐标值
 * @returns {-1 | 1} -1 为凹顶点，1 为凸顶点
 */
export function concavityAndConvexityOfPolygonVertices (coordinates, [x, y]) {
  const flag = polygonDirection(coordinates)
  let targetIndex = -1
  for (let i = 0; i < coordinates[0].length; i++) {
    const [ix, iy] = coordinates[0][i]
    if (ix === x && iy === y) {
      targetIndex = i
      break
    }
  }
  const count = coordinates[0].length
  const [x1, y1] = coordinates[0][(targetIndex + count - 1) % count]
  const [x2, y2] = coordinates[0][(targetIndex + count) % count]
  const [x3, y3] = coordinates[0][(targetIndex + count + 1) % count]
  const K = (x2 - x1) * (y3 - y2) - (x3 - x2) * (y2 - y1)
  if (flag === 1) {
    if (K > 0) { // 凸
      return 1
    } else if (K < 0) { // 凹
      return -1
    }
  } else if (flag === -1) {
    if (K < 0) { // 凸
      return 1
    } else if (K > 0) { // 凹
      return -1
    }
  }
}

/*
"coordinates": [
  [
    [
      115.224609375,
      35.67514743608467
    ],
    [
      113.4228515625,
      31.80289258670676
    ],
    [
      117.1142578125,
      29.267232865200878
    ],
    [
      121.06933593749999,
      31.87755764334002
    ],
    [
      120.58593749999999,
      36.4566360115962
    ],
    [
      115.224609375,
      35.67514743608467
    ]
  ]
]
*/
