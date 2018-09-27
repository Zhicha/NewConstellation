// exam


/*
// lesson Структуры данных
// == если объекты ссылаются на один объект то true === сравнивает значения
// typeof что бы узнать данные строка? число? массив? объект?
// For (var x"<--- это счётчик и задается кажды последующий объект от сюда --->" of y)
function deepEqual(a,b) {
  if (a===b) return true;
    if (a ==null || typeof a != "object" || b == null || typeof b != "object") return false;
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length != keysB.length) return false;
    for (let key of keysA) {
      if(!keysB.icludes(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
  }
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj,obj));

// deep equal
var newList = {
  value: 0,
  rest: list
}
*/
/*
//build the function
function arrayToList(array) {
  let list = null;
  for (let i = 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}
var mar=[1,2,3];

console.log(arrayToList(mar));

// create an array from the list
*/


/*
// Create a new list. New element will add first to the list
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}
console.log(listToArray(list));
function prepend(value, list) {
  return {value, rest: list};
}
function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}


// function should be return elements on the position in the list or undefined (if element missing)
function nth(list, number) {

}
// plus recrusive version last function

*/
/*
// Обращаем массив вспять
function reverseArrayInPlace(array) {
 var lenght2 = array.length - 1;
for (var i = 0; i < lenght2; i++) {
  x = array[i];
  array[i] = array[lenght2];
  array[lenght2] = x;
  lenght2 = lenght2 - 1;
}
   console.log(array);
}
var arrayForReverse2 = [1,2,3,4,5,6,7,8,9];
reverseArrayInPlace(arrayForReverse2);

function reverse1(array) {
 var newArray=[];
for (var i = 0; i < array.length; i++) {
  newArray.unshift(array[i]);
}
console.log(newArray);
}
var arrayForReverse = [1,2,3,4,5,6,7,8,9];
reverse1(arrayForReverse);
// Сумма диапазона
function range1(start=0, end=9, step=1) {
var array1 = [];
  if (step == 0) {
    step=1;
  }
  if (step>0) {
    if (start>end) {
      middle1 = start;
      start = end;
      end = middle1;
    }
    for (var i = start; i <= end; i=i+step) {
      array1.push(i);
    }
  }
  if (step<0) {
    if (start<end) {
      middle1 = start;
      start = end;
      end = middle1;
    }
    step = step * (-1);
    middle1 = start;
    start = end;
    end = middle1;
    var array1 = [];
    for (var i = start; i <= end; i=i+step) {
      array1.unshift(i);
    }
  }

  console.log(array1);
}
range1(1,10,4);
//Сумма диапазона
var array2 = [1,2,3,4,5,6,7,8,9,10];
var sumArray = 0;
function sum1(array) {
for (var i = 0; i < array.length; i++) {
  sumArray = sumArray + array[i];
  }
console.log(sumArray);
}
sum1(array2);
// считаем бобы

// variant 2
function coontbobs(a,c) {
  var b = 0;
  String(a);
  for (var i = 0; i < a.length; i++) {
    if (a.charAt(i) == c)
      b++;
  }
  console.log("This contain ",b," letter", c);
}
coontbobs("BoBVanoff","o");
// console --> This contain 2 letter o

// variant 1
function coontbobs(a) {
  var b = 0;
  String(a);
  for (var i = 0; i < a.length; i++) {
    if (a.charAt(i) == "B")
      b++;
  }
  console.log("This contain ",b," letter B");
}
coontbobs("BoBVan");

// чет/нечет
function isEven(a) {
  if (a < 0) {
    a*= -1;
  }
  if (a == 0) {
    console.log(true);
  }else if (a == 1) {
    console.log(false);
  }else {
    a -= 2;
    isEven(a)
  }
}
isEven(-2);

function minmath(a,b) {
  if (a < b) {
    console.log(a);
  } else if (a == b) {
    console.log("This number equal")
  } else {
    console.log(b);
  }
}
minmath(-10,5);
//colsole(5)
*/
