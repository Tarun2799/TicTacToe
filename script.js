const X_CLASS = "x";
const CIRCLE_CLASS = "circle";

// 14. let's create an array for winning combinations of an arrays. These are only combinations to win the game.
const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    // verticals
    [0,3,6],
    [1,4,7],
    [2,5,8],
    // diagonals
    [0,4,8],
    [2,4,6]
]

// 3. this way we can easily use this string throughut our application without having to duplicate them all over the [laces.]

const cellElements = document.querySelectorAll('[data-cell]');

//9. 
const board = document.getElementById('board');

const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
//18. 
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');

//25. 
const resetButton = document.getElementById('resetButton');



let circleTurn; // 2. if circles turn it become true. So we can easily determine which class we are using by checking whose turn it is.Let's create some constant variable which is our X/Circle class.

// cellElements.forEach( cell => {
//     cell.addEventListener("click", handleClick, {once: true}) // means only fire eventListener once
// })

// 13. 
startGame()

// 22.
restartButton.addEventListener("click", startGame); 
//it will not restart it , because our startgame function is reseting everything that has happened. And we have to unset everything up. Let's do this

//12. our first instance is not setting board hover class(after refresh state). And inside of this func we want to add all of our cell elements from above and we also wat to set board hover class here. so let's call our dunction inside of this and we set circleturn to false. Just to start And mke sure we call this fun at the start of our script.
function startGame(){

    circleTurn = false;
    cellElements.forEach( cell => {
        //24. we have to remove classes
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener("click", handleClick, {once: true}) // means only fire eventListener once
    })

    setBoardHoverCLass()
    //23.
    winningMessageElement.classList.remove('show')
}

function handleClick(e){
    // console.log("clicked")
    // 4. Let's get our curretCLass, but we to get our cell as well.
    const cell = e.target;
    const currentCLass = circleTurn ? CIRCLE_CLASS : X_CLASS ;
    // 5. for placing the mark in the cell, we create a separate function
    placeMark(cell, currentCLass);
    // placemark
    // 15. here we going to use that winning combinations. 
    if(checkWin(currentCLass)){
        // console.log("winner")
        endGame(false)
    }// 19. 
    else if(isDraw()){
        endGame(true)
    }else{ // we only want to swap turn if there is no winner
        swapTurns()
        setBoardHoverCLass()
    }
    // check for draw, if none of this happens
    //switching turns
    
}

// 17. 
function endGame(draw){
    if(draw){
        //20.
        winningMessageTextElement.innerText = 'Draw!';
    }else{
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winningMessageElement.classList.add('show');
}

// 21.we are get every celland check if it has a class. If every cell has either X/circle class we will return true, becoz it is a draw. This cell elements does not have an every method so we destructure them into Array
function isDraw(){
    return [...cellElements].every( cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}

// 1. first easy thing is to place the mark, but for that we should know whose it is?


// 6. this function is easy, we just add the clss to cell, according to current class. 
function placeMark(cell, currentCLass){
    cell.classList.add(currentCLass); // it is now, placing X in all the cells, because we have to switch turns.
}

// 7. 
function swapTurns(){
    // this fun is going to take the circleturn and going to set the opposite of the circleturn
    circleTurn = !circleTurn; // x o x o x o
}

// 8. let's create hover state. In this function we are going to determine which class we are applying. We want to make sure we going to do this after switching turns, so that we know what current player is? Not whose turn it use be. Let's get our board first.
function setBoardHoverCLass(){
    // 10. we remove both classes
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);

    // 11. by this both classes were removed and we check from our variable circleTurn
    if(circleTurn){ // then we add circle class
        board.classList.add(CIRCLE_CLASS);
    }
    else{
        board.classList.add(X_CLASS);
    }


}

// 16. here we checks all th winning combination and to see if some of the winning combination have met by the current combinations
function checkWin(currentCLass){
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentCLass) // if CurCLass is in all the cell, in the comibinations, then we are winner
        })
    }) // this is going to return true,-----

}
// -------if anyof the value inside of it is true.And this is going to loop over all different the combintions. And for each one of the combinations. We want to check if all of the indexs, if all the values in our cell elemnets have the same class  

//26.
resetButton.addEventListener('click', startGame);
