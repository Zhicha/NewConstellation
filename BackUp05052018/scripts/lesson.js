// lesson

// object
// ЕСли имя свойства не является допустимым (например Кирилица) тогда оно заключается в ковычки

// сколько раз событие случается по отношению к обращению в белку

/*
function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0,0,0,0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index +=1;
    if (entry.squirrel) index +=2;
    table[index] +=1;
  }
  return table;
}

console.log(tableFor("pizza", journal));
// -> [76,9,4,1]


//ВЫЧЕСЛЯЕМ КОЛЕЛЯЦИЮ
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
}
console.log(phi([76, 9, 4, 1]));
// -> 0.068599434

var object1 = {value: 10};
var object2 = {object1};
var object3 = {value: 10};

console.log(object1 == object2);
// -> true
console.log(object1 == object3);
// -> false

object1.value = 15;
console.log(object2.value);
// -> 15
console.log(object3.value);
// -> 10


var journal = [
  {events: ["work","touch the tree","pizza","run","TV"],
  squirrel: false},
  {events: ["work","ice cream","color cabadge", "climb","touch the tree","brush my teeth"]
  squirrel: false},
  {events: ["holyday","bike","break", "nuts","beer"],
  squirrel: true},

];


function abd (a, b) {
  var x = a + b;
  return x;
}

abd ()
function check_abd () {
}


var anObject = {left: 1, right: 2};
console.log(anObject.left);
//-> 1
delete anObject.left;
console.log(anObject.left);
//-> undifined
console.log("left" in anObject);
//-> false
console.log("right" in anObject);
//-> true

var description = {
  work: "пошел работать",
  "тронул дерево": "дотронулся до дерева"
};
var day1 = {
  squirrel: false,
  events: ["Job", "touch a tree", "pizza", "run", "TV"]
};
console.log(day1.squirrel);
//--> false
console.log(day1.wolf);
//--> undifined
day1.wolf = false;
console.log(day1.wolf);
//--> false

//методы
var mack =[];
mack.push ("Trest, ");
mack.push ("Which one", "Break");
console.log(mack);
//-> ["Trest, ","Which one", "Break"]
console.log(mack.join(" "));
//-> Trest, Which one Break
console.log(mack.pop());
//-> Break
console.log(mack);
//-> ["Trest, ","Which one"]

var doh = "dik"
console.log(typeof doh.toUpperCase);
//-> function
 console.log(doh.toUpperCase());
//-> DIK

//свойства anythinks.length Math.max и тп извлечение свойств any[i]

// Массивы
var listNumber = [2,3,5,7,11];
console.log(listNumber[1]);
//-> 3
console.log(listNumber[1-1]);
//-> 2

//Выращивание функциии
// вариант 1.3 Refactoring 2
// добавить нулей
function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width) {
    string = "0" + string;
    return string;
  }
}
// вывести инвентаризацию фермы
function printFarmInventory(cows, chickens,pigs) {
  console.log(zeroPad(cows, 3) + " Коров");
  console.log(zeroPad(chickens, 3) + " Куриц");
  console.log(zeroPad(pigs, 3) + " Свиней");
}

printFarmInventory(7, 16, 3);

// вариант 1.2 Refactoring
//ввод с добавлением нулей и меткой
function printZeroPaddedWithLabel(number, label) {
  var numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(numberString + " " + label);
}

// вывести инвентаризацию
function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Коров");
  printZeroPaddedWithLabel(chickens, "Куриц");
  printZeroPaddedWithLabel(pigs, "Свиней");
}
printFarmInventory (7, 11, 3);


// вариант 1.1
function printFarmInventory(cows, chickens) {
  var cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(cowString+" Коров");
  var chickenString = String(chickens);
  while (chickenString.length <3) {
    chickenString = "0" + chickenString;
  }
  console.log(chickenString + " Куриц");
}
printFarmInventory(7,11);

//function рекурсия (Вызывание функцией сому себя (не переполняя стэк!))
function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "("+ history + " + 5)") || find(start * 3, "("+ history + " * 3)")
  }
  return find(1, "1");
}

console.log(findSolution(24));
// ->(((1*3)+5)*3)

// var 2
function power(base, exponent) {
    if (exponent == 0)
      return 1;
    else
      return base * power(base, exponent - 1);
}

console.log(power(2,3));
// -> 8

//function замыкание учебник стр. 88-89
function multiplier(factor) {
  return function (number) {
    return number * factor;
  }
}
var twice = multiplier(2);
console.log(twice(5));
// -> 10
//Если функциии передать лишние аргументы она отрежет лишнее если мало недостающим присваивается undifined
function power(base, exponent) {
  if (exponent == undifined)
    exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}

console.log(power(4));
//-> 16
console.log(power(4,3));
// -> 64

// Функция которая не задаётся переменной не может использоваться внутри циклов и условий так как видится везде
// СТЭК При вызове функций запоминается контекст и требует местав памяти при ногих или бесконечных стэках памят переполняется (стакан)
// Переменные и функции, функция в переменной. Имя функции не изменно переменная не может принимать другие значения
var launchMissiles = function pli(value) {
  missileSystem.Launch("pli");
}
if (safeMode)
  launchMissiles = function drop(value) {
  missileSystem.Launch("pli");
}
// Outside and inside variable
// landscape Работа вложенных функций (они принимают переменные снаружи, но не видят их во вложенных в них же функциях. Лексические области видимости)
function landscape() {
  var result = "";
  function flat(size) {
    for (i = 0; i < size; i++) {
      result += "_";
    }
  }
    function mountain(size) {
      result += "/";
      for (i = 0; i < size; i++) {
        result += "'";
      }
      result += "\\";// первая косая черта это экранирование второй для корректного отображения
    }
  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
}
console.log(landscape());


var xGlobalvar = "outside";
function f1() {
  var xGlobalvar = "inside f1";
}
f1();
console.log(xGlobalvar);
//-> outside

function f2() {
  xGlobalvar = "inside f2";
}
f2();
console.log(xGlobalvar);
//-> inside f2

var square = function functionName(x) {
  return x * x;
};
console.log(square(12));
 if (getElementById('sceplemie').value == 0 || getElementById('gas').value == 0){
  console.log(); ('None')
}

// no parameters
var string = function() {
  console.log("Hellow");
}

// two parameters
var power = function (base, exponent) {
  var result = 1;
  for (i = 0; i < exponent; i++) {
    result *= base;
  }
    return result;
  }
console.log(power(2,10));
*/

/*
//CAR DATA
var will = 3.14, os = 1, bolts = 4, backmost = osboltswills + kzhuh;
var osboltswills = os + ((will + bolts)*2);
kzhuh = 500;
// rules panel
var exitfunctionworm; // fom 0 to 33
exitfunctionworm = getElementById('gas').value;
// rules panel
var connectosworm; // 0 or 1
connectosworm = getElementById('sceplemie').value;
// Rules panel
// programm another external DATA
//condition most 0 (stop) or 1 (rotate)
var oscondition;
// Process IMPORTANT POINT
if (connectosworm == 1 && exitfunctionworm > 0){
    oscondition = exitfunctionworm;
}
if (connectosworm == 0 && exitfunctionworm > 0){
    oscondition = oscondition * 1;
    count = oscondition;
coof = getElementById('road').value //if mud 3 if beton 1
    for (var i = 0; i < count; i++) {
      oscondition=oscondition-coof;
    };
}



//from book
var total =0,  count = 1;
while (count<=10) {
  total += count;
  count += 1;
}
console.log(total);
//55
//Example2 SAME
console.log(sum(range(1,10)));
//my Examlpe
var c0 = 0;
var c2 = c1;
for (var i = 1; i < 11; i++) {
c2 = i;
if ((c2 - 11) == 0) {
  console.log(c0);
}
c0 = c0 + i;
}
*/

/*confirm("Lets go?");
var thenumber = Number(prompt("Put any number", "")); // prompt comeback string always
alert("Квадрат числа " + thenumber * thenumber);
// VARIANT 2
var thenumber1 = prompt("Put any number", "");
if (!isNaN(thenumber))
  alert("Квадрат числа " + thenumber1 * thenumber1);
else
  alert("Введено не число.");
//Variant 3
var thenumber2 = prompt("Put any number", "");
if (thenumber2 < 10)
  alert("Число маловато");
else if (thenumber2 < 100)
  alert("Квадрат числа " + thenumber2 * thenumber2);
else
  alert("Число маловато");
// While
var number = 0;
while (number < 12) {
  console.log(number);
  number = number + 2;
}
// DO
do {
var yourname = prompt("Who are you?","");
} while (!yourname);
alert("Welcome");
// FOR
for (var numbers= 0; numbers <= 12; numbers + 2)
  console.log()numbers;
switch (prompt("how are Your name ")) {
  case "Matilda":
    console.log("Hi Matilda");
    break;
    case "Vasja":
    case "Petja":
      console.log("Privet brodjagi");
      break;
  default:
    console.log("Hi!");
      break;
}*/
