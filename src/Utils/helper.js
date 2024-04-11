let martrix = [
    [100, 99, 98, 97, 96, 95, 94, 93, 92, 91],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [80, 79, 78, 77, 76, 75, 74, 73, 72, 71],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [60, 59, 58, 57, 56, 55, 54, 53, 52, 51],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [40, 39, 38, 37, 36, 35, 34, 33, 32, 31],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [20, 19, 18, 17, 16, 15, 14, 13, 12, 11],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
];

let width = 88;
let height = 80;

const getRandomSnakesandLadders = () => {
    let max = 4; //max index in snakes and ladders array
    let min = 0; //min index in snakes and ladders array
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const RollDice = () => {
    let max = 6; //max index in snakes and ladders array
    let min = 1; //min index in snakes and ladders array
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const calculateSnakePosition = (head, tail) => {
    let headRow;
    let headCol;
    let tailRow;
    let tailCol;
    for (let i = 0; i < martrix.length; i++) {
        for (let j = 0; j < martrix[i].length; j++) {
            if (martrix[i][j] === head) {
                headRow = i;
                headCol = j;
            }
            else if (martrix[i][j] === tail) {
                tailRow = i;
                tailCol = j
            }
        }
    }
    let top = (height * headRow) + headRow;
    let left = width * headCol;
    let imageHeight = ((tailRow - headRow) + 1) * height;
    top = imageHeight <= 240 ? top + headRow : top;
    let imageWidth = (Math.abs(tailCol - headCol) + 1) * width;
    let transform = headCol > tailCol ? 'scaleX(-1)' : 'none';
    left = transform !== 'none' ? left - imageWidth + width + headCol + tailCol : left;
    return { top, left, imageHeight, imageWidth, transform }
}

const calculatePath = (currentPos, targetPos) => {
    let rowCur;
    let rowTar;
    for (let i = 0; i < martrix.length; i++) {
        for (let j = 0; j < martrix[i].length; j++) {
            if (martrix[i][j] === currentPos) {
                rowCur = i;
            }
            if (martrix[i][j] === targetPos) {
                rowTar = i;
            }
        }
    }
    let x = 0, y = 0;
    if (rowCur === rowTar) {
        x = rowCur % 2 === 0 ? -((targetPos - currentPos) * 88) : ((targetPos - currentPos) * 88);
        console.log(currentPos, targetPos, x);
        return { x, y, again: false };
    }
    else {
        let maxNumberOfCurRow = rowCur % 2 === 0 ? martrix[rowCur][0] : martrix[rowCur][9];
        x = rowCur % 2 === 0 ? -((maxNumberOfCurRow - currentPos) * 88) : ((maxNumberOfCurRow - currentPos) * 88);
        y = -80;
        console.log(maxNumberOfCurRow, currentPos, targetPos, x, y);
        return { x, y, again: true, newPos: { currentPos: maxNumberOfCurRow + 1, targetPos: targetPos } }
    }
}

const checkSnakeOnTile = (snakes, targetTile) => {
    for (let snake of snakes) {
        if (snake[0] === targetTile) {
            return snake[1];
        }
    }
    return false;
}

const checkLadderOnTile = (ladders, targetTile) => {
    for (let ladder of ladders) {
        if (ladder[1] === targetTile) {
            return ladder[0];
        }
    }
    return false;
}

export {
    getRandomSnakesandLadders,
    calculateSnakePosition,
    RollDice,
    calculatePath,
    checkSnakeOnTile,
    checkLadderOnTile,
}