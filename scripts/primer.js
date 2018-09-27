// Полиморфизм
// Main operation function
/*
function operationMain(dateOper, sumOper, typeOper, contrAg) {
var operationAddVar = {dateOperation: undefined, sumOperation: 0, typeOperation: 'debt', contrAgent: undefined};
operationAddVar.dateOperation = dateOper;
operationAddVar.sumOperation = sumOper;
operationAddVar.typeOperation = typeOper;
operationAddVar.contrAgent = contrAg;
console.log(operationAddVar);
return operationAddVar;
}

function operationClick() {
  var resultOperation = operationMain(document.getElementById('dateOper').value, document.getElementById('sumOper').value, document.getElementById('typeOper').value, document.getElementById('contrAgent').value);
  if (resultOperation.typeOperation == 'debt') {
    console.log(resultOperation.sumOperation);
  } else {
    resultOperation.sumOperation = resultOperation.sumOperation * -1;
    console.log(resultOperation.sumOperation);
  }
}
*/
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

console.log(sniper1);
console.log(snipers);
goOutTheBuilding(sniper1);
console.log(sniper1);
// Инкапсулирование
// Наследование
