document.addEventListener('DOMContentLoaded', startGame)
//add event listener to check for win
document.addEventListener('click', checkForWin)
// Define your `board` object here!
var board = {
  cells:[
    {row: 0,
     col: 0,
     isMine: true,
     hidden: true,
     surroundingMines: 1
    }, 
    {row: 0,
      col: 1,
      isMine: false,
      hidden: true,
      surroundingMines: 1
     },
     {row: 0,
      col: 2,
      isMine: true,
      hidden: true,
      surroundingMines: 1
     },
     {row: 0,
      col: 3,
      isMine: true,
      hidden: true,
      surroundingMines: 1
     },
     {row: 1,
      col: 0,
      isMine: false,
      hidden: true,
      surroundingMines: 1
     },
     {row: 1,
      col: 1,
      isMine: true,
      hidden: true,
      surroundingMines: 1
     },
     {row: 1,
      col: 2,
      isMine: true,
      hidden: true,
      surroundingMines: 1
     },
     {row: 1,
      col: 3,
      isMine: false,
      hidden: true,
      surroundingMines: 1
     },
     {row: 2,
      col: 0,
      isMine: true,
      hidden: true,
      surroundingMines: 1
     },
     {row: 2,
      col: 1,
      isMine: false,
      hidden: true,
      surroundingMines: 1
     },
     {row: 2,
      col: 2,
      isMine: true,
      hidden: true,
      surroundingMines: 1
     },
     {row: 2,
      col: 3,
      isMine: true,
      hidden: true,
      surroundingMines: 1
     },
     {row: 3,
      col: 0,
      isMine: true,
      hidden: true,
      surroundingMines: 1
     },
     {row: 3,
      col: 1,
      isMine: false,
      hidden: true,
      surroundingMines: 1
     },
     {row: 3,
      col: 2,
      isMine: true,
      hidden: true,
      surroundingMines: 0
     },
     {row: 3,
      col: 3,
      isMine: false,
      hidden: true,
      surroundingMines:0 
     }
  ]
}
board.cells.isMine = true;
function startGame () {

    for(let i = 0; i < board.cells.length; i++){
        board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
       
    }
    // Don't remove this function call: it makes the game work!
    lib.initBoard()
  
}


function checkForWin () {
  // the .filter() method creates a new array that pass the test implemented by the callback() function
  //the .filter is a cleaner method than for loops
  //the.every() method tests whether all elements in the array pass the test implemented by the provided function, returns boolean
  let mine = board.cells.filter(kaboom => kaboom.isMine == true);
  let notABomb = board.cells.filter(noKaboom => noKaboom.isMine == false);
  let allBombs = mine.every(kaboom => kaboom.isMarked == true);
  
  let noMoreHiding = notABomb.every(noKaboom => noKaboom.hidden == false);

  if(allBombs == true && noMoreHiding == true){
   return lib.displayMessage('You win!')
  }
  
}
  //for(let i = 0; i < board.cells.length; i++){
  //  if(board.cells[i].isMine == true && board.cells[i].isMarked == true){
  //   
  //  } if(board.cells[i].isMarked == true && board.cells[i].hidden == true){
  //    
  //  }
  //  else{
  //    lib.displayMessage('You lose!');
  //  }
  //}

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  
  // Define this function to count the number of mines around the cell
  // (there could be as many as 8). You don't have to get the surrounding
  // cells yourself! Just use `lib.getSurroundingCells`: 
  
 

  // It will return cell objects in an array. You should loop through 
  // them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
 
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  let mine = 0;
  //loop gets the number of mines surrounding cell and adds to mine/count
  surrounding.forEach(element => {
    if(element.isMine){
      mine++
    }
  });



console.log(mine);
//return surrounding;
return mine;

}

