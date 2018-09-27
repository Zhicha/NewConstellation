// Drawing a chessboard (2 cycle; 3 conditions)
var height = 3;
var width = 2;
var kvadratick = "";
var row = "";
var perenos = "\n";
for (var i = 0; i < height; i++) {
  row ="";
  if (i == 0) {
      kvadratick = "# "
      for (var i1 = 0; i1 < width; i1++) {
        row += kvadratick;
    }
  }else if (i%2) {
      kvadratick = " #"
      for (var i1 = 0; i1 < width; i1++) {
        row += kvadratick;
      }
  } else {
      kvadratick = "# "
      for (var i1 = 0; i1 < width; i1++) {
        row += kvadratick;
        }
      }
  row += perenos;
  console.log(row);
}
