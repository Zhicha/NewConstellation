// X-Change
xchangebutton.onclick = function xchange() {
var a = document.getElementById('to').value;
var b = document.getElementById('from').value;
var c = document.getElementById('course').value;
var d = document.getElementById('xchange').value;
  if (b == "egp" && a == "tousd") {
    var result = d / c;
    document.getElementById("showresult").innerHTML = result.toFixed(2);
  }else if (b == "usd" && a == "toegp") {
    var result = d * c;
    document.getElementById("showresult").innerHTML = result.toFixed(2);
  }else {
    alert("Работают только доллары и гиней");
  }
};


/* // variants onklick
document.getElementById('xchangebutton').onclick = function() {
    alert('Спасибо')
}
var input = document.getElementById('xchangebutton');
var handler = function() {
    alert('Спасибо!')
}
input.attachEvent( "onclick" , handler); // поставить обработчик
*/
