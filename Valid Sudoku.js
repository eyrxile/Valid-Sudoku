var isValidSudoku = function(board) {
    const rows = new Array(9).fill().map(() => new Set());
    const columns = new Array(9).fill().map(() => new Set());
    const boxes = new Array(9).fill().map(() => new Set());

    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            const cell = board[i][j];
            if(cell !== '.'){
                if(rows[i].has(cell) || columns[j].has(cell) || boxes[Math.floor(i / 3) * 3+ Math.floor(j / 3)].has(cell)){
                    return false;
                }
                rows[i].add(cell);
                columns[j].add(cell);
                boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(cell);
            }
        }
    }
    return true;
};

//Example usage:
const board1 = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

const board2 = [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(board1));
console.log(isValidSudoku(board2));