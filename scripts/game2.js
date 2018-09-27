// Game 2
//Place
/*var maxWidthField = 5, minWidthField = 5, address=0;
// Ship
// Go to left right up down
function getAddress() {
  var skyShip = document.getElementById('skyShip');
  var parentTd = skyShip.parentNode;
  var addressX = Number(parentTd.id.slice(1));
  var addressY = parentTd.id.charAt(0)
  address = addressX;
}
function gotoright(steps) {
getAddress();
if (address<5) {
  address++;
  parentTd02.removeChild('img');
  var newIdTd = String(address) + addressY;
  var newElement = document.getElementById(newIdTd)
  newElement.appendChild(skyShip);
}
}
*/

var myPositionX = 2, myPositionY = 2, widthField=5, hightField=5;
var shipPosition = document.getElementById('skyShip');
var actualCell = 'p' + String(myPositionX) + String(myPositionY);

//ship

function moveImg(actualCell) {
  var cellActual = document.getElementById(actualCell);
  cellActual.appendChild(shipPosition);
}

function moveMove() {
  if (event.keyCode == 40) {
    if (myPositionX >= widthField) {
      console.log('So sorry, but You cannot clip through the wall...');
    } else {
      myPositionX++;
      actualCell = 'p' + String(myPositionX) + String(myPositionY);
      moveImg(actualCell);
    }
  }
if (event.keyCode == 39) {
  if (myPositionY >= hightField) {
    console.log('So sorry, but You cannot clip through the wall...');
  } else {
    myPositionY++;
    actualCell = 'p' + String(myPositionX) + String(myPositionY);
    moveImg(actualCell);
  }
}
if (event.keyCode == 38) {
  if (myPositionX == 1) {
    console.log('So sorry, but You cannot clip through the wall...');
  } else {
    myPositionX--;
    actualCell = 'p' + String(myPositionX) + String(myPositionY);
    moveImg(actualCell);
  }
}
if (event.keyCode == 37) {
if (myPositionY == 1) {
  console.log('So sorry, but You cannot clip through the wall...');
} else {
  myPositionY--;
  actualCell = 'p' + String(myPositionX) + String(myPositionY);
  moveImg(actualCell);
}
}
}
/*
//Gun
var GunPositionX = 5, GunPositionY = 4;
var GunPosition = document.getElementById('Gun');
var GunDirection = 'nord';
var actualCellGun = 'p' + String(GunPositionX) + String(GunPositionY);

function rotateGun(GunDirection) {
  var cellActualGun = document.getElementById(actualCellGun);
  cellActual.appendChild(GunDirection);
}

function moveMove() {
  if (event.keyCode == 40) {
    if (GunPositionX >= widthField) {
      console.log('So sorry, but You cannot clip through the wall...');
    } else {
      GunDirection = 'south';
      rotateGun(GunDirection);
    }
  }
if (event.keyCode == 39) {
  if (GunPositionY >= hightField) {
    console.log('So sorry, but You cannot clip through the wall...');
  } else {
    GunDirection = 'east';
    rotateGun(GunDirection);
  }
}
if (event.keyCode == 38) {
  if (GunPositionX == 1) {
    console.log('So sorry, but You cannot clip through the wall...');
  } else {
  GunDirection = 'nord';
  rotateGun(GunDirection);
  }
}
if (event.keyCode == 37) {
if (GunPositionY == 1) {
  console.log('So sorry, but You cannot clip through the wall...');
} else {
GunDirection = 'west';
rotateGun(GunDirection);
}
}
}
*/
