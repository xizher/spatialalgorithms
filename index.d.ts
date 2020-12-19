/**
 * 判断多边形方向
 * @param coordinates 多边形坐标串
 * @returns -1 为顺时针方向，1为逆时针方向
 */
export declare function polygonDirection (coordinates: [][][]) : 1 | -1

/**
 * 判定多边形顶点凹凸性
 * @param coordinates 多边形坐标串
 * @param xy xy坐标值 
 * @returns -1 为凹顶点，1 为凸顶点
 */
export declare function concavityAndConvexityOfPolygonVertices (coordinates: [][][], [x, y]: [number, number]) : 1 | -1

/**
 * 计算两点间的直线距离
 * @param point1 点坐标1
 * @param point2 点坐标2
 * @returns 距离结果
 */
export declare function distanceFromTwoPoint ([x1, y1] : [number, number], [x2, y2] : [number, number]) : number

/**
 * 计算两点间的曼哈顿距离
 * @param point1 坐标点1
 * @param point2 坐标点2
 * @returns 距离结果
 */
export declare function distanceFromTwoPointByManhattan ([x1, y1] : [number, number], [x2, y2] : [number, number]) : number

/**
 * 计算两点间的中点
 * @param point1 坐标点1
 * @param point2 坐标点2
 * @returns 结果中点
 */
export declare function centerFromTwoPoint ([x1, y1] : [number, number], [x2, y2] : [number, number]) : [number, number]

/**
 * 计算点的对称点
 * @param point1 点
 * @param point2 对称中心
 */
export declare function symmetryPoint ([x, y]: [number, number], [cx, cy]: [number, number]) : [number, number]

