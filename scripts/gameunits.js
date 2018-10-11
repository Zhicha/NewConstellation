// Game Units
//Army
//Soldier
function buySoldier() {
  var eliteResource01 = document.getElementById('elite').textContent;
  var workersResource01 = document.getElementById('workers').textContent;
  var menResousce01 = document.getElementById('menResousce').textContent;
  var countPehota01 = document.getElementById('countPehota').textContent;
  if (eliteResource01 == 0 && workersResource01 == 0 && menResousce01 > 0 && resourseGas > soldereCost) {
    if (countPehota01 >= colonyArmyLimit) {
        noiseLink();
        consoleImg('img/workers.jpg');
        document.getElementById("sound09").play();
    } else if (Number(countPehota01) >= Number(menResousce01)) {
    } else {
      countPehota01++;
      document.getElementById('countPehota').innerHTML = '';
      document.getElementById('countPehota').innerHTML = countPehota01;
      resourseGas = document.getElementById('gasThereIs').textContent;
      resourseGas = resourseGas - soldereCost;
      document.getElementById('gasThereIs').innerHTML = resourseGas;
      console.log("solder ready -"+soldereCost+' gas');
      consoleBar('Solder is ready.');
      noiseLink();
      consoleImg('img/workers.jpg');
      document.getElementById("sound05").play();
    }
  } else {
    noiseLink();
    consoleImg('img/secreter.jpg');
    document.getElementById("sound10").play();
  }
}
// Biggan
  function buyBiggan() {
    var countBiggan = document.getElementById('countBiggan').textContent;
    var countPehota01 = document.getElementById('countPehota').textContent;
    if (countBiggan >= bigGans.limit) {
      noiseLink();
      consoleImg('img/workers.jpg');
      document.getElementById("sound09").play();
      } else if (((Number(countPehota01) - (Number(countBiggan)*2)) >= bigGans.soldier) && resourseGas >= bigGans.cost) {
        Number(countBiggan);
        countBiggan++;
        document.getElementById('countBiggan').innerHTML = '';
        document.getElementById('countBiggan').innerHTML = countBiggan;
        resourseGas = document.getElementById('gasThereIs').textContent;
        resourseGas = resourseGas - bigGans.cost;
        document.getElementById('gasThereIs').innerHTML = resourseGas;
        consoleBar('BigGun is ready.');
        noiseLink();
        consoleImg('img/workers.jpg');
        document.getElementById("sound07").play();
        } else {
          noiseLink();
          consoleImg('img/workers.jpg');
          document.getElementById("sound11").play();
      }
  }
  // Super gun
    function buySupergun() {
      var countBiggan = document.getElementById('countBiggan').textContent;
      var countSupergun = document.getElementById('countSuperGun').textContent;
      var countPehota01 = document.getElementById('countPehota').textContent;
      if (countSupergun >= superGun.limit) {
        noiseLink();
        consoleImg('img/workers.jpg');
        document.getElementById("sound09").play();
        } else if (((Number(countPehota01) - (Number(countBiggan)*2)) >= superGun.soldier) && resourseGas >= superGun.cost) {
          Number(countSupergun);
          countSupergun++;
          document.getElementById('countSuperGun').innerHTML = '';
          document.getElementById('countSuperGun').innerHTML = countSupergun;
          resourseGas = document.getElementById('gasThereIs').textContent;
          resourseGas = resourseGas - superGun.cost;
          document.getElementById('gasThereIs').innerHTML = resourseGas;
          consoleBar('Super Gun is ready.');
          noiseLink();
          consoleImg('img/workers.jpg');
          document.getElementById("sound18").play();
          } else {
            noiseLink();
            consoleImg('img/workers.jpg');
            document.getElementById("sound11").play();
        }
    }
