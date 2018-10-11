// JavaScript source code
// Function translate $ sum
function act(a,b,c,d,e,f) {
var y = [a,b,c,d,e,f];
var g = 0;
var h = 0;
var i = 0;
var j = 0;
var k = 0;
var l = 0;

var n1 = 0;
var n2 = 0;
var sum1 = '';
// ответ записывается с конца, с переменной l
if (f == 1 && c == 1){
  l = 0;
  k = 1;
} else {
  l = f + c;
};

if (e == 1 && b == 1) {
if (k == 1) {
  k = 1;
  j = 1;
} else {
  k = 0;
  j = 1;
}
}
if (e + b == 1) {
if (k == 1) {
  k = 0;
  j = 1;
} else {
  k = 1;
}
}
if (a == 1 && d == 1) {
if (j == 1) {
  j = 1;
  i = 1;
} else {
  j = 0;
  i = 1;
}
}
if (a + d == 1) {
if (j == 1) {
  j = 0;
  i = 1;
} else {
  j = 1;
}
}
if ((g,h,i,j,k,l) == 0,0,1,0,0,1) {
console.log(9);
}
};
act(0,1,1,1,1,0);
// tranlator 0 1 --> 1-9
var n2 = 000010;
var n3 = 000011;
var n4 = 000100;
var n5 = 000101;
var n6 = 000110;
var n7 = 000111;
var n8 = 001000;
var n9 = 001001;
/*function act (c, d) {
if (c < 0 || d < 0) {
b = 'less then 0';
return b;
};


a = c / d;

if (a > d) {
b = 'break the terms';
return b;
};

if (a == 0) {
return d;
};
e = a;
for (i = 0; i < Math.round(e); i++) {
c = d;
d = a;
a = c / d;
console.log(a);
};
console.log(a);
};

act(200,78);
console.log(a);
*/
