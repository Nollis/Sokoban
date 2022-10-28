/*   This is the base file for the Sokoban assignment - include this one in your HTML page, before you add the main script file*/

/*   Enum of CSS Classes for the static elements   */
var Tiles = {
  Wall: "tile-wall",
  Space: "tile-space",
  Goal: "tile-goal",
};

/*   Enum of CSS Classes for the moving elements   */
var Entities = {
  Character: "entity-player",
  Block: "entity-block",
  BlockDone: "entity-block-goal",
};

/*  Legend
    W = Wall
    B = Movable block
    P = Player starting position
    G = Goal area for the blocks
*/
  var tileMap01 = {
    width: 19,
    height: 16,
    mapGrid: [
      [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], ["W"], [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], ["W"], [" "], [" "], ["B"], [" "], [" "], ["P"], [" "], ["G"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
    ],
  };

  var tileMap02 = {
    width: 19,
    height: 16,
    mapGrid: [
      [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], ["W"], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], ["W"], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], ["W"], ["W"], [" "], [" "], [" "], [" "], ["W"], [" "], [" "], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], ["W"], ["W"], [" "], [" "], [" "], ["W"], [" "], ["B"], [" "], [" "], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], ["W"], [" "], ["W"], [" "], ["W"], ["W"], [" "], ["W"], ["B"], [" "], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], ["W"], [" "], [" "], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], ["W"], ["W"], [" "], ["W"], ["W"], [" "], ["W"], ["W"], ["G"], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], ["W"], [" "], ["B"], [" "], [" "], [" "], ["G"], ["P"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], ["W"], [" "], [" "], ["W"], ["W"], ["W"], ["G"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], ["W"], ["W"], [" "], ["W"], [" "], ["W"], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], [" "], ["W"], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
      [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
    ],
  };
  
var tileMap03 = {
  width: 19,
  height: 16,
  mapGrid: [
    [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
    [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
    [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
    [ [" "], [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
    [ [" "], [" "], [" "], [" "], ["W"], [" "], [" "], [" "], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
    [ [" "], [" "], [" "], [" "], ["W"], ["B"], [" "], [" "], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
    [ [" "], [" "], ["W"], ["W"], ["W"], [" "], [" "], ["B"], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
    [ [" "], [" "], ["W"], [" "], [" "], ["B"], [" "], ["B"], [" "], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
    [ ["W"], ["W"], ["W"], [" "], ["W"], [" "], ["W"], ["W"], [" "], ["W"], [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ],
    [ ["W"], [" "], [" "], [" "], ["W"], [" "], ["W"], ["W"], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], [" "], [" "], ["G"], ["G"], ["W"], ],
    [ ["W"], [" "], ["B"], [" "], [" "], ["B"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ["G"], ["G"], ["W"], ],
    [ ["W"], ["W"], ["W"], ["W"], [" "], ["W"], ["W"], ["W"], [" "], ["W"], ["P"], ["W"], ["W"], [" "], [" "], ["G"], ["G"], ["W"], ["W"], ], 
    [ [" "], [" "], [" "], [" "], ["W"], [" "], [" "], [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ],
    [ [" "], [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
    [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
    [ [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ],
  ],
};

function getKeyAndMove(e) {
  e.preventDefault();
  if (e.key == "ArrowUp") {
    movePlayer("up");
    return;
  }
  if (e.key == "ArrowDown") {
    movePlayer("down");
    return;
  }
  if (e.key == "ArrowRight") {
    movePlayer("right");
    return;
  }
  if (e.key == "ArrowLeft") {
    movePlayer("left");
    return;
  }
}

function gameStart() {
  readMap()
  document.addEventListener('keydown', getKeyAndMove)
}

function readMap() {
  let rownumber = 0
  let gridSize = 19 * 16

  for (let i = 0; i < gridSize; i++) {
    let div = document.createElement('div')
    div.id = (i%19) + '-' + rownumber
    div.classList.add('floor')
    
    
     if(tileMap03.mapGrid[rownumber][i%19]=="W") {
      div.classList.add('wall')
     }
     else if(tileMap03.mapGrid[rownumber][i%19]=="G") {
      div.classList.add('goal')
     }
     else if(tileMap03.mapGrid[rownumber][i%19]=="B") {
      div.classList.add('box')
     }
     else if(tileMap03.mapGrid[rownumber][i%19]=="P") {
      div.classList.add('player')
     }

    document.getElementById('game-area').append(div)

    if ((i+1) % 19 == 0) {
      rownumber++
    }

  }
}

function movePlayer(direction) {
  let dirModifierX = 0;
  let dirModifierY = 0;
  if (direction == 'up') {
      dirModifierY = -1;
  }
  if (direction == 'down') {
      dirModifierY = 1;
  }
  if (direction == 'right') {
      dirModifierX = 1;
  }
  if (direction == 'left') {
      dirModifierX = -1;
  }

  let divCurrPlayerPos = document.getElementsByClassName('player')[0]
  let bananasCollected = document.getElementsByClassName('scorebox').length
  document.getElementById('score').innerHTML = bananasCollected

if (bananasCollected == 6) {
  document.getElementById('winner').innerHTML = 'You Won!!!'
}

  // console.log(divCurrPlayerPos)
  let currPlayerPos = divCurrPlayerPos.id;

  let playerXcoord = currPlayerPos.split('-')[0]
  let playerYcoord = currPlayerPos.split('-')[1]

  let nextPlayerPosX = Math.floor(playerXcoord) + dirModifierX
  let nextPlayerPosY = Math.floor(playerYcoord) + dirModifierY
  let oneStepAheadX = nextPlayerPosX + dirModifierX
  let oneStepAheadY = nextPlayerPosY + dirModifierY

  //Find the target div
  let nextPosCoords = nextPlayerPosX + '-' + nextPlayerPosY
  let divNextPlayerPos = document.getElementById(nextPosCoords)

  let secondPosCoords = oneStepAheadX + '-' + oneStepAheadY
  let divSecondPlayerPos = document.getElementById(secondPosCoords)

  if(checkWall(divNextPlayerPos)){
    //Move the player by removing class from current position and adding same player class to next position
    if (checktwoStepsAhead(divNextPlayerPos, divSecondPlayerPos)) {
      divNextPlayerPos.classList.add('player')
      divCurrPlayerPos.classList.remove('player')
      if(divNextPlayerPos.classList.contains('box')) {
        //Move the box by removing class from current position and adding same box class to next position
        divSecondPlayerPos.classList.add('box')
        divNextPlayerPos.classList.remove('box')
        if(divSecondPlayerPos.classList.contains('goal')) {
          divSecondPlayerPos.classList.add('scorebox')
          divNextPlayerPos.classList.remove('scorebox')
        }
      }
    }
  }
}

function checkWall(divNextPlayerPos) {
  if(divNextPlayerPos.classList.contains('wall')) {
    return false
  }
  else {
    return true
  }
}

function checktwoStepsAhead(divNextPlayerPos, divSecondPlayerPos) {
  if(divNextPlayerPos.classList.contains('box') && divSecondPlayerPos.classList.contains('box')) {
    return false
  }
  else if(divNextPlayerPos.classList.contains('box') && divSecondPlayerPos.classList.contains('wall')) {
    return false
  }
  else {
    return true
  }
}