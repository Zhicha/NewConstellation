var battleField;
var lunatank;
var lunatankPlace=[];
var lunatankDirection = 3; //south
var goalX=[];
var gumanoidgreen;
var gumanoidBuilding = true;
var gumanoidBuildingStrong = 2;
var gumanoidBuildingPlace = [3,5];
//buttelfield
function fieldSize(width, height) {
  function pushArray(x,y) {
    var z = [];
    for (var i = 0; i < x; i++) {
      if (!y) {
        z.push(i);
      } else {
      z.push(y);
      }
    }
    return z;
  }
  battleField = pushArray(width, pushArray(height, false));
  lunatankPlace = pushArray(2,false);
}
fieldSize(10,10);
console.log("Field is ", battleField);
//lunatank
function lunaMoves() {
  // all should br here
}
function moveForward() {
if (lunatankDirection == 3) {
  lunatankPlace[0]++;
} else if (lunatankDirection == 2) {
  lunatankPlace[1]++;
} else if (lunatankDirection == 1) {
  lunatankPlace[0] = lunatankPlace[0]-1;
} else {
  lunatankPlace[1] = lunatankPlace[1] -1;
}
//lunatankPlace[1] = ;
console.log(lunatankPlace);
}
function turnRL(sideXY) {
  if (sideXY == 'left') {
    if (lunatankDirection == 1) {
      lunatankDirection = 4;
    } else {
      lunatankDirection--
    }
  } else {
    if (lunatankDirection == 4) {
      lunatankDirection = 1;
    } else {
      lunatankDirection++
    }
  }
  console.log(lunatankDirection);
}

function lunatankGun() {
  goalX[0] = lunatankPlace[0];
  goalX[1] = lunatankPlace[1];
  if (lunatankDirection == 3) {
    goalX[0]++;
  } else if (lunatankDirection == 2) {
    goalX[1]++;
  } else if (lunatankDirection == 1) {
    goalX[0] = goalX[0]-1;
  } else {
    goalX[1] = goalX[1]-1;
  }
  console.log("Coordinate ", goalX, " attact success.");

  if (goalX[0]==gumanoidBuildingPlace[0]&&goalX[1]==gumanoidBuildingPlace[1]) {
    if (gumanoidBuildingStrong > 1) {
      gumanoidBuildingStrong--;
    console.log("Wow! Gumanoid's Building stand yet");
  } else if (gumanoidBuildingStrong > 0) {
      gumanoidBuildingStrong--;
    console.log("Very strong!!!!");
    } else {
    console.log("Gumanoid's Building has been destroyed");
    gumanoidBuilding = false;
    }
  }
}
console.log("Destroy gumanoid's building by coordinate 3,5");
console.log("Yes!");
moveForward();
moveForward();
turnRL();
moveForward();
turnRL('left');
moveForward();
turnRL('left');
moveForward();
moveForward();
moveForward();
moveForward();
lunatankGun();
console.log("Try again!");
lunatankGun();
console.log("Again!");
lunatankGun();
console.log("You win!");

/*

*/
