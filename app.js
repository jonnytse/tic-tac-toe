const onload = () =>  {

let playerMove = 0
let winner = false;
console.log(winner); 
// let result = document.querySelector('.outcome');

const boxOne = document.getElementsByClassName('one');
const boxFour = document.getElementsByClassName('four');

const gameResult = document.querySelector('#result');

// const gameRestart = () => {
//     let playerMove = 0
//     let winner = false;
//     let movesArrayO = [];  
//     let movesArrayX = [];
// }

const again = document.querySelector('#again');

const movesArrayX = [];
const movesArrayO = [];

const boxOneIndex = $("#txt1");
const boxTwoIndex = $("#txt2");
const boxThreeIndex = $("#txt3");
const boxFourIndex = $("#txt4");
const boxFiveIndex = $("#txt5");
const boxSixIndex = $("#txt6");
const boxSevenIndex = $("#txt7");
const boxEightIndex = $("#txt8");
const boxNineIndex = $("#txt9");

// console.log($("section").index(boxOneIndex));

$(".box").one("click", function() {
    if (playerMove % 2 === 0) { //even turn
        $(this).append("X");
        playerMove++;
        movesArrayX.push($("section").index(this));
        console.log(movesArrayX);
    } else { 
        $(this).append("O");
        playerMove++;
        movesArrayO.push($("section").index(this));
        console.log(movesArrayO);
    };

    if ((movesArrayX.includes(0) && movesArrayX.includes(3) && movesArrayX.includes(6)) ||
        (movesArrayX.includes(1) && movesArrayX.includes(4) && movesArrayX.includes(7)) ||
        (movesArrayX.includes(2) && movesArrayX.includes(5) && movesArrayX.includes(8)) ||
        (movesArrayX.includes(0) && movesArrayX.includes(1) && movesArrayX.includes(2)) ||
        (movesArrayX.includes(3) && movesArrayX.includes(4) && movesArrayX.includes(5)) ||
        (movesArrayX.includes(6) && movesArrayX.includes(7) && movesArrayX.includes(8)) ||
        (movesArrayX.includes(0) && movesArrayX.includes(4) && movesArrayX.includes(8)) ||
        (movesArrayX.includes(2) && movesArrayX.includes(4) && movesArrayX.includes(6))) {
        gameResult.innerHTML = "PLAYER 1 (X)";
        winner = true;
        console.log(winner);
        if (winner == true) {
            $(".box").off("click");
        }
    } else if ((movesArrayO.includes(0) && movesArrayO.includes(3) && movesArrayO.includes(6)) ||
        (movesArrayO.includes(1) && movesArrayO.includes(4) && movesArrayO.includes(7)) ||
        (movesArrayO.includes(2) && movesArrayO.includes(5) && movesArrayO.includes(8)) ||
        (movesArrayO.includes(0) && movesArrayO.includes(1) && movesArrayO.includes(2)) ||
        (movesArrayO.includes(3) && movesArrayO.includes(4) && movesArrayO.includes(5)) ||
        (movesArrayO.includes(6) && movesArrayO.includes(7) && movesArrayO.includes(8)) ||
        (movesArrayO.includes(0) && movesArrayO.includes(4) && movesArrayO.includes(8)) ||
        (movesArrayO.includes(2) && movesArrayO.includes(4) && movesArrayO.includes(6))) {
        gameResult.innerHTML = "PLAYER 2 (O)"
        winner = true;
        console.log(winner);
        if (winner == true) {
            $(".box").off("click");
        }    
    } else if ((movesArrayX.length) + (movesArrayO.length) === 9) {
        gameResult.innerHTML = "Sorry...it's a draw"
    }
    
    $("#again").on("click", function () {
        location.reload();
        return false;
    });
});

};
$(onload);