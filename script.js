const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
// 3. this way we can easily use this string throughut our application without having to duplicate them all over the [laces.]

const cellElements = document.querySelectorAll('[data-cell]');

//9. 
const board = document.getElementById('board');


let circleTurn; // 2. if circles turn it become true. So we can easily determine which class we are using by checking whose turn it is.Let's create some constant variable which is our X/Circle class.

// cellElements.forEach( cell => {
//     cell.addEventListener("click", handleClick, {once: true}) // means only fire eventListener once
// })

// 13. 
startGame()

//12. our first instance is not setting board hover class(after refresh state). And inside of this func we want to add all of our cell elements from above and we also wat to set board hover class here. so let's call our dunction inside of this and we set circleturn to false. Just to start And mke sure we call this fun at the start of our script.
function startGame(){

    circleTurn = false;
    cellElements.forEach( cell => {
        cell.addEventListener("click", handleClick, {once: true}) // means only fire eventListener once
    })

    setBoardHoverCLass()
}

function handleClick(e){
    // console.log("clicked")
    // 4. Let's get our curretCLass, but we to get our cell as well.
    const cell = e.target;
    const currentCLass = circleTurn ? CIRCLE_CLASS : X_CLASS ;
    // 5. for placing the mark in the cell, we create a separate function
    placeMark(cell, currentCLass);
    // placemark
    // check for draw, if none of this happens
    //switching turns
    swapTurns()
    setBoardHoverCLass()
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