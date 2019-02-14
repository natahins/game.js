export class Matrix {
    constructor(matrixLength) {
        this.matrixLength = matrixLength;
        this.matrix = this.createMatrix();
    }

    createMatrix() {
        return (new Array(this.matrixLength)).fill([]).map(arrItem => (new Array(this.matrixLength)).fill(null));
    }
}
