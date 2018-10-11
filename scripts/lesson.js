// lesson
// Abstractions
/*
*/
// Функции высшего порядка

/*
// JSON
// bint
var theSet = ["Carnel Haverbeke", "Maria van Brussel", "Donald Duck"];
function isInSet(set, person) {
  return set.indexOf(person.name) > -1;
}
console.log(ancestry.filter(function(person) {
  return isInSet(theSet, person);
}));
// -> [{name: "Maria van Brussel", ...},
//     {name: "Carnel Haverbeke", ...}]
console.log(ancestry.filter(isInSet.bind(null, theSet)));
//-> The same result ^
//
function countAncestors(person, test) {
  function combine(person, fromMother, fromFather) {
    var thisOneCounts = test(person);
    return fromMother + fromFather +(thisOneCounts ? 1 : 0);
  }
  return reduceAncestors(person, combine, 0);
}
function longLivingPercentage(person) {
  var all = countAncestors(person, function(person) {
    return true;
  })
  var longLiving = countAncestors(person, function(person) {
    return (person.died - person.born) >= 70;
  });
  return longLiving / all;
}
console.log(longLivingPercentage(byName["Emile Haverbeke"]));
// -> 0.145
function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if (person == null) {
      return defaultValue;
    } else {
      return f(person, valueFor(byName[person.mother]),valueFor(byName[person.father]));
    }
  }
  return valueFor(person);
}

var byName ={};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});
console.log(byName["Philibert Haverbeke"]);
// -> {name: "Philibert Haverbeke"}

function sharedDNA(person, fromMother, fromFather) {
  if (person.name == "Pauwels van Haverbeke") {
    return 1;
  } else {
    return (fromMother + fromFather) / 2;
  }
}
var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, sharedDNA, 0)/4);
//-> 0.00049
// average age
function average(array) {
  function plus(a,b) {return a + b; }
  return array.reduce(plus) / array.length
}
function  age(p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }
console.log(average(ancestry.filter(male).map(age)));
// -> 61.67
console.log(average(ancestry.filter(female).map(age)));
// -> 54.56
//Reduce or Fold
function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++) {
    current = combine(current, array[i])};
    }
  return current;
}
  console.log(reduce([1,2,3,4],function(a,b) {
    return a+b;
  }, 0));
  //-> 10
console.log(ancestry.reduce(function(min, cur) {
  if (cur.born < min.born) {
    return cur;
  }else {
    return min;
  }
}
// {name: "Pauwels van Haverbeke", born: 1535, ...}

//Метод map преобразовывает массив, применяя функцию ко всем его элементам и строя новый массив из возвращаемых значений
// как filter & forEach, map так же является стандартным методом у массивов
function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++) {
    mapped.push(transform(array[i]));
  return mapped;
  }
}
var overNinety = ancestry.filter(function(person) {
  return person.died - person.born > 90;
});
console.log(map(overNinty, function(person) {
  return person.name;
}));
// -> ["Clara Aernoudts", "Emile Haverbeke", "Maria Haverbeke"]

var myTree = JSON.stringify([
  { "name": "Жаркова Мария Васильевна", "sex": "F",
    "родилась": "11/03/1928", "ушла из жизни": "2012",
    "отец": "Жарков Василий",
    "мать": "Жичкина Екатерина",
    "место рождения": "Икшево, Владимирская область"
  },
  { "name": "Христофоров Василий Филиппович", "sex": "M",
    "родился": "16/9/1925", "ушёл из жизни": "2011",
    "отец": "Христофоров Филлипп Фёдорович",
    "мать": "Анна",
    "место рождения": "Икшево, Владимирская область"},
]);
var myTreeReady = JSON.parse(myTree);
console.log(myTreeReady.length);

// filter
function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i])) {
      passed.push(array[i])
    }
  }
return passed;
}

console.log(filter(myTreeReady, function(person) {
  return person.sex == "F" && person.sex != "M";
}));
// standart filtr method
console.log(myTreeReady.filter(function(person) {
  return person.sex == "M";
}));
// -> Василий Филиппович
// -> 2s

var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
// -> {"name": "X","born":1980} convert to JSON
console.log(JSON.parse(string).born);
// -> 1980 convert from JSON
// JSON простые величины и обязательно ""

[
  {"name": "Жаркова Мария Васильевна", "пол": "Ж",
    "родилась": "11/03/1928", "ушла из жизни": "2012",
    "отец": "Жарков Василий",
    "мать": "Жичкина Екатерина",
    "место рождения": "Икшево, Владимирская область"
  },
  {"name": "Христофоров Василий Филиппович", "пол": "М",
    "родился": "16/9/1925", "ушёл из жизни": "2011",
    "отец": "Христофоров Филлипп Фёдорович",
    "мать": "Анна",
    "место рождения": "Икшево, Владимирская область"},
}
]

// Передача аргументов
// not good way. argument issue
function oisy(f) {
  return function(arg) {
    console.log('calling with', arg);
    var val = f(arg);
    console.log("called with", arg, "-got", val);
    return val;
  };
}
// good method
function transparentWrapping(f) {
  return function() {
    return f.apply(null, arguments);
  }
}

// Function rule a flow
function unless(test,then) {
  if (!test) then();
}
function repeat(times, body) {
  for (var i = 0; i < times; i ++) body(i);
}
repeat(3, function(n){
  unless(n % 2, function () {
    console.log(n, "is even");
  });
});
// -> 0 is even
// -> 2 is even

// Function create a function
function greaterThan(n) {
  return function(m) {return m > n;};
}
var greaterThen10 = greaterThan(10);
console.log(greaterThan10(11));
// -> true
function noisy(f) {
  return function (arg) {
    var val = f(arg);
    console.log("called with", arg, "-got", val);
    return val;
  };
}
noisy(Boolean)(0);
// -> calling with 0
// -> calling with 0 - got false

// was
function forEach(array, action) {
  for (var i = 0; i < array.length; i++) {
    action(array[i]);
  }
}

function gatherCorrelations(journal) {
  var phis ={};
  for (var entry = 0; entry < jornal.length; entry++) {
    var events = jornal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis)) {
        phis[event] = phi(tableFor(event, journal));
      }
    }
    return phis;
  }
// became more clear
function gatherCorrelations(journal) {
  var phis ={};
  journal.forEach(function(entry){
      entry.events.forEach(function(event){
        if (!(event in phis)) phis[event] = phi(tableFor(event, journal));
        });
      });
    return phis;
}

var total = 0, count = 1;
while (count <= 10) {
  total += count;
  count +=1;
}
console.log(total);
// THIS IS read better
console.log(range(1, 10));
// Abstraction
//easy array
var array = [1,2,3];
for (var i = 0; i < array.length; i++) {
  var current = array[i];
  console.log(current);
}
// This array equal next function (this best way)

function logEach(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
// argument
// Смысл: Функция передаётся в функцию как аргумент
function forEach(array, action) {
  for (var i = 0; i < array.length; i++) {
    action(array[i]);
  }
}
forEach(["Tili", "Mili", "Trjandia"], console.log)
//-> Tili
//-> Mili
//-> Trjandia
// можно не передавать функцию, а создать прямо на месте, то есть на месте аргумента передаётся функция
// another way
var numbers = [1,2,3,4,5], sum = 0;
forEach(numbers, function (number) {
  sum += number;
});
console.log(sum);
// -> 15

var myVar = 10;
console.log("myVar" in window);
// -> true
console.log(window.myVar);
// -> 10
// random
console.log(Math.ceil(Math.random()*10));
// -> from 0 to 9 5.6 to 5
console.log(Math.random());
// -> from 0.000000000 until 1.0000000000
console.log(Math.floor(Math.random()*10));
// -> from 0 to 9 5.6 to 5
function randomIntOnCircle(radius) {
  var angle = Math.random() * 2 * Math.PI;
  return{x: radius * Math.cos(angle),
         y: radius * Math.sin(angle)};
}

console.log(randomIntOnCircle(2));
// -> {x: 0.3667, y: 1.966} Random, not precisely

function addEntry(squirrel) {
  var entry = {events: [], squirrel: squirrel};
  for (var i = 1; i < arguments.length; i++) {
    entry.events.push(arguments[i]);
  }
  journal.push(entry);
}
addEntry(true, "work", "touching the tree", "pizza", "running", "TV");

// Аргументы функциии
function argumentCounter() {
  console.log("Ты дал мне", arguments.length, "аргумента.");
}
argumentCounter("Дядя", "Стёпа", "Милиционер");
//->Ты дал мне 3 аргумента

function noArguments() {}
noArguments(1,2,3); //Пойдёт
function threeArguments(a,b,c) {}
threeArguments(); // И так можно

//Some method for string
var string = "abc";
console.log(string.length);
// -> 3
console.log(string.charAt(0));
// -> a
console.log(string[1]);
// -> b

// trim удаляет пробелы и строки
console.log(" ладно \n ".trim());
// -> ладно
// Строки SLICE & indexOf
console.log("кокосы".slice(3,6));
// -> осы
console.log("кокосы".indexOf("с"));
// -> 4

console.log("раз два три".indexOf("ва"));
// -> 5
function remove(array, index) {
  return array.slice(0,index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));
// -> ["a","b","d","e"]

// slice принимает номер начального и конечного элементов. Возвращает массив из элементов промежутка, включая первый, но исключая конечный. Вход Индекс Выход значение
var sliceElm = [0,1,2,3,4];
console.log(sliceElm.slice(2, 4));
// -> 2,3
console.log(sliceElm.slice(2)); // this no the end index
// -> 2,3,4
// поиск элемента сначала или конца массива (принимает значение, но возвращает индекс)
var searchElm = [1,2,3,2,1];
console.log(searchElm.indexOf(2));
// -> 1
console.log(searchElm.lastIndexOf(2));
// -> 3
// Push & pop методы для добавления и удаления элементов в конце массиа
// unshift & shift  в начале массива

var todoList = [1,2,3];
function rememberTo(task) {
  todoList.push(task);
}
function whatIsNext() {
  return todoList.shift();
}
function urgentlyRememberTo(task) {
  todoList.unshift(task);
}
var task1 = 9;
rememberTo(task1);
console.log(todoList);
whatIsNext();
console.log(todoList);
urgentlyRememberTo(task1);
console.log(todoList);

  var journal = [
  {events: ["work","touch the tree","pizza","run","TV"],
  squirrel: false},
  {events: ["work","ice cream","color cabadge", "climb","touch the tree","brush my teeth"],
  squirrel: false},
  {events: ["holyday","bike","break", "nuts","beer"],
  squirrel: true},

];
var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}
storePhi("pizza", 0.069);
storePhi("to touch a tree", -0.081);
console.log("pizza" in map);
// -> true
console.log(map["to touch a tree"]);
// -> -0.081
for (var event in map) {
  console.log("Correlation for '"+ event + "'eventually" + map[event]);
}
//Correlation for Pizza is 0.069
//Correlation for To touch a tree is -0.081

// object
// ЕСли имя свойства не является допустимым (например Кирилица) тогда оно заключается в ковычки
// сколько раз событие случается по отношению к обращению в белку

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

function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
       var event = events[i];
       if (!(event in phis)) {
         phis[event] = phi(tableFor(event, journal));
       }
    }
  }
  return phis
}

var correlations = gatherCorrelations(journal);
console.log(correlations.pizza);
// -> 0.068599434

for (var event in correlations) {
  console.log(event + ": " + correlations[event]);
}
for (var event in correlations) {
  var correlation = correlations[event];
  if(correlation > 0.1 || correlation < 0.1)
  console.log(event + ": " + correlations[event]);
}


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
