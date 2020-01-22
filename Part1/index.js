const board = [];

function play(clickedId) {
    const played = document.getElementById('player');
    const element = document.getElementById(clickedId);

    if (played.innerText === 'X') {
        played.innerText = 'O';
        element.innerText = 'X';
        board[clickedId] = 'X'
    }
    else {
        played.innerText = 'X';
        element.innerText = 'O';
        board[clickedId] = 'O'
    }

    console.log(board)

    const topLeft = board[0];
    const topMiddle = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middleMiddle = board[4];
    const middleRight = board[5];
    const bottomLeft = board[6];
    const bottomMiddle = board[7];
    const bottomRight = board[8];

    if(topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if(middleLeft !== undefined && middleLeft === middleMiddle && middleLeft === middleRight) {
        alert(`${middleLeft} is the winner`);
        return;
    }
    if(bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        alert(`${bottomLeft} is the winner`);
        return;
    }
    if(topLeft !== undefined && topLeft === middleMiddle && topLeft === bottomRight) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if(topRight !== undefined && topRight === bottomMiddle && topRight === bottomLeft) {
        alert(`${topRight} is the winner`);
        return;
    }
    if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if(topMiddle !== undefined && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        alert(`${topMiddle} is the winner`);
        return;
    }
    if(topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner`);
        return;
    }

    let boardfull = true;

    for(let i = 0; i <=8; i++) {
        if(board[i] === undefined) {
            boardfull = false
        }
    }

    if(boardfull == true) {
        alert("Cat's game, there is no winner!!");
    }
}