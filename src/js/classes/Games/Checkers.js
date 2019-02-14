export class Checkers {
    constructor(matrix) {
        this.matrix = matrix;
        this.playerOne = [
            [0, 1],
            [0, 3],
            [0, 5],
            [0, 7],
            [1, 0],
            [1, 2],
            [1, 4],
            [1, 6],
            [2, 1],
            [2, 3],
            [2, 5],
            [2, 7]
        ];
        this.playerTwo = [
            [7, 0],
            [7, 2],
            [7, 4],
            [7, 6],
            [6, 1],
            [6, 3],
            [6, 5],
            [6, 7],
            [5, 0],
            [5, 2],
            [5, 4],
            [5, 6]
        ]
    }

    run() {
        this.playerOne.forEach(item => {
            this.matrix[item[0]][item[1]] = 123;
        });

        this.playerTwo.forEach(item => {
            this.matrix[item[0]][item[1]] = 123;
        });

        return this.matrix;
    }
}
