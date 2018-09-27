// JavaScript source code
// Function 1 Ephclide
function change(a, b) {
  var med = a;
  a = b;
  b = med;
  return [a, b];
}
var m = 119;
var n = 554;
var r = 0;
var r2 = 0;
var temp = Math.round(m / n);
if (temp == 0) {
var med2 = [];
med2 = change(m, n);
m = med2[0];
n = med2[1];
}
for (var i = 1; i < 1000; i++) {
temp = (m / n).toFixed(2);
r = temp[temp.length-1];
r2 = temp[temp.length-2];
r = r2 + r;
m = n;
n = Number(r);
if (r == 0) {
console.log(i,m);
  }
}
/*var r = 0;
var r2 = 0;
r = m / n;*/
console.log(r);

/*
function act (c, d) {
var e = 0;

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
