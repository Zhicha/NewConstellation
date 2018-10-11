// Game
//Global
var colonyName = "Colony A01";
var colonyArmyLimit = 0;
var power1 = {limit: 99, limitforBase: 99, elite: 2, workers: 10, soldires: 20, eliteArmy: 4, gasLimit: 499};
var bigGans = {limit: 4, soldier: 2, attack: 140, cost: 250}
var superGun = {limit: 4, soldier: 1, attack: 30, cost: 150}
var resourseGas = 0;
var soldereCost = 15;
var human = [100,5]; //health, speed
var amunition = [25,25] //arrow(+preparing), attack(+preparing)
var soldere = [human[0],human[1],amunition[0],amunition[1]];
var sniper = [soldere[0],soldere[1],soldere[2],soldere[3]*4];
// buildung and other
var building = [2,amunition[1]];
var house = [building];
// bonuses
var ambush = 2;
//terrain
var forest = [human[1] - 1, amunition[0]+25, ambush]; // при условии первого хода *2 attack - ambush
var field = [amunition[0]/2];
var road = [human[1]+2,amunition[0]/2];
var snipers = [{},{},{},{},{}];
var populationThis = [];
var humanDate = {live: human[0], speed: human[1], type: 0};
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            alert('left');
            break;
        case 38:
            alert('up');
            break;
        case 39:
            alert('right');
            break;
        case 40:
            alert('down');
            break;
    }
};

function createSniper() {
for (var i = 0; i < snipers.length; i++) {
  if (snipers[i].rang) {
  } else {
    snipers[i].rang = "serge";
    snipers[i].live = sniper[0];
    snipers[i].speed = sniper[1];
    snipers[i].amunition = sniper[2];
    snipers[i].attack = sniper[3];
    var newSniper = snipers[i];
    return newSniper;
  }
}
}
function inTheBuilding(unit) {
  unit.place = "building";
  unit.amunition *= building[0];
}
function goOutTheBuilding(unit) {
  unit.place = "yard";
  unit.amunition /= building[0];
}
var sniper1 = createSniper();
var sniper2 = createSniper();
snipers[0].rang = "Old Serge"
inTheBuilding(sniper1);

// Gas Resource
function GasStart() {
var startGameGas = 50;
resourseGas = startGameGas;
  document.getElementById('gasThereIs').innerHTML = resourseGas;
  document.getElementById('gasLimit').innerHTML = power1.gasLimit;
}
function gasGet() {
  resourseGas++;
  if (resourseGas <= power1.gasLimit) {
    document.getElementById('gasThereIs').innerHTML = resourseGas;
  } else if (document.getElementById('consoleBar').textContent == 'Attention, all tanks are full!') {
  } else {
    consoleBar('Attention, all tanks are full!');
    noiseLink();
    consoleImg('img/secreter.jpg');
    document.getElementById("sound12").play();
  }
}

// men sourse

// men Resource
function DoYouNeed() {
  document.getElementById('elite').innerHTML = power1.elite;
  document.getElementById('workers').innerHTML = power1.workers;
}
function manBorn() {
  populationThis.push ({live: human[0], speed: human[1], type: 0});
  document.getElementById('menResousce').innerHTML = populationThis.length;
  if (populationThis.length > power1.limit) {
    noiseLink();
    consoleImg('img/secreter.jpg');
    consoleBar('Colony full.');
    document.getElementById("sound08").play();
    clearInterval(intervalManBorn);
  }
  var eliteResource = document.getElementById('elite').textContent;
  var workersResource = document.getElementById('workers').textContent;
  if (eliteResource > 0) {
    document.getElementById('elite').innerHTML = eliteResource - 1;
    if (eliteResource==1) {
    noiseLink();
    consoleBar('Administration of colony is ready.');
    consoleImg('img/secreter.jpg');
    document.getElementById("sound02").play();
  }
  } else if (workersResource > 0) {
    document.getElementById('workers').innerHTML = workersResource - 1;
    if (workersResource==1) {
    noiseLink();
    consoleBar('All main workers of colony is ready.');
    consoleImg('img/secreter.jpg');
    document.getElementById("sound04").play();
  }
}
}

  // Game process
  var intervalManBorn = setInterval(manBorn, 1000);

  //clearInterval(intervalGasGet);
  var intervalGasGet = setInterval(gasGet, 100);

  // Console bar
  function consoleBar(message) {
    document.getElementById('consoleBar').innerHTML = message;
  }
  function mainScreen() {
    var imageConsoleMain = document.getElementById('consoleShow');
    imageConsoleMain.src = 'img/colony01.jpg';
  }
  function consoleImg(img) {
    var imageConsole = document.getElementById('consoleShow');
    imageConsole.src = img;
    setTimeout(mainScreen, 2000);
  }

//SOUND
var xSound = document.getElementById("sound01");
function playAudio() {
    xSound.play;
}
function fullNoise() {
  var imageConsoleMain = document.getElementById('consoleShow');
  imageConsoleMain.src = 'img/noise01.gif';
  document.getElementById("sound06").play();
}
function noiseLink() {
  document.getElementById("sound03").play();
}
