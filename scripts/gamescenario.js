// Game Scenario
// Start game default
// limits
colonyArmyLimit = 15;
power1.gasLimit = 500;
power1.limit = 30;

DoYouNeed();
GasStart();
consoleBar('Start game!');
fullNoise();
setTimeout(mainScreen, 2000);
//Events
setTimeout(humanoidAttack, 40000);
setTimeout(pirate, 70000);
setTimeout(tradeShipArrive, 250000);
