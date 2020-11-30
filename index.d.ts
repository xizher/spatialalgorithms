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
