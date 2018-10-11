// Check
// System functions
function abd (a, b) {
  var x = a * b;
  return x;
  }
// System CHECK
function check_abd (x,y,z) {
  var checkMsg01 = "Check is";
  var checkMsg02 = "---";
  if (Number(z) === x*y) {
    checkMsg02 = "Success.";
  console.log("Check: ", checkMsg01, " over.", " Results:", checkMsg02);
} else {
  checkMsg02 = "Failure.";
  console.log("Check: ", checkMsg01,  " over.", " Results:", checkMsg02);
  }
  }
//Button "count"
xchangebutton.onclick = function xchange() {
/*var first = null;
var second = null;*/
var first = document.getElementById('course').value;
var second = document.getElementById('xchange').value;
if (!second || first === "") {
    console.log("Failure:   Any field is empty.");
    document.getElementById("showresult").innerHTML = "Fill all fields, please.";
    return;
}
var show = abd (first, second);
document.getElementById("showresult").innerHTML = show;
// console log
console.log(show);
// Check function
console.log("Success:  The calculation is over.");
console.log(document.getElementById('course').value, document.getElementById('xchange').value, document.getElementById("showresult").innerHTML);
check_abd (document.getElementById('course').value, document.getElementById('xchange').value, document.getElementById("showresult").innerHTML);
}
// It is log
console.log("Load status is Normal");
