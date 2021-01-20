export class Matrix {

  _array = []

  constructor (arr, rowCount, colCount) {
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

}
