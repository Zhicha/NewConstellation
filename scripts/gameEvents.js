// Game events
//Global
//Timer

//Trade Ship arriving
var tradeShip = {men: 100, container: 500, credo: 700}
function tradeShipArrive() {
  consoleBar('Arrived a ship for trade!');
  consoleImg('img/secreter.jpg');
  document.getElementById("sound13").play();
}

// Warning the Pirats!
// Stolen only give gontainer gas; danger 2 is catch people
//error -> var piratesShip = {men: 5, container: 200, hitPower: 3 danger: 1, type: "stolen"};
function pirate() {
  function shoot() {
    document.getElementById("sound14").play();
  }
  consoleBar('Attention! The radars detected pirates!');
  consoleImg('img/workers.jpg');
  document.getElementById("sound15").play();
  setTimeout(shoot, 5000);
}


function humanoidAttack() {
  function shootSG() {
    document.getElementById("sound17").play();
  }
  consoleBar('humanoid Attacked our base! Fire!');
  consoleImg('img/workers.jpg');
  document.getElementById("sound16").play();
  setTimeout(shootSG, 2300);
}
