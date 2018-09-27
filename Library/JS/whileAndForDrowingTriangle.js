// sharp triangle 2 Variants 2 cycles: while & for
//VAR 1

var triangle = "#";
while (triangle.length<=7) {
  console.log(triangle+="#");
}

// Var 2
var triangle = "#";
for (var i = 0; i <= 7; i++) {
  console.log(triangle);
  triangle = triangle + "#"
}
