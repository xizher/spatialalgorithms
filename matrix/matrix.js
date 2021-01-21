export class Matrix {

  _array = []
  _targetExtent = null

  constructor (arr, rowCount, colCount, targetExtent) {
    this.rowCount = rowCount
    this.colCount = colCount
    this._targetExtent = targetExtent

    let index = 0
    for (let i = 0; i < rowCount; i++) {
      this._array[i] = []
      for (let j = 0; j < colCount; j++) {
        this._array[i][j] = arr[index++]
      }
    }
  }

  get(row) {
    return col => {
      return this._array[row][col]
    }
  }

  geoXYToSceneXY (point) {
    const [x, y] = [
      Math.round((point.x - this._targetExtent.xmin) * (this.colCount - 0) / (this._targetExtent.xmax - this._targetExtent.xmin) + 0),
      Math.round(((this._targetExtent.ymax - (point.y - this._targetExtent.ymin) - this._targetExtent.ymin) * (this.rowCount - 0)) / (this._targetExtent.ymax - this._targetExtent.ymin) + 0)
    ]
    return [x, y]
  }

  getByGeoPoint (point) {
    const [x, y] = this.geoXYToSceneXY(point)

    return this.get(y)(x)
  }

  getByGeoLine (startPoint, endPoint) {
    const [startX, startY] = this.geoXYToSceneXY(startPoint)
    const [endX, endY] = this.geoXYToSceneXY(endPoint)
    const _self = this

    return DDA()

    function DDA () {
      const dx = Math.abs(endX - startX)
      const dy = Math.abs(endY - startY)
      const k = dx > dy ? dx : dy
      const xincre = (endX - startX) / k
      const yincre = (endY - startY) / k
      let x = startX
      let y = startY
      const arr = []
      for (let i = 0; i < k; i ++) {
        arr.push(_self.get(Math.round(y))(Math.round(x)))
        x += xincre
        y += yincre
      }
      return arr
    }
  }

}
