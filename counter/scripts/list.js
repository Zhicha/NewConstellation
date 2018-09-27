function createLabel(tag,elementById,text) {
  var createTag = document.createElement(tag);
  createTag.innerHTML = text;
  var parentLabel = document.getElementById(elementById);
  parentLabel.appendChild(createTag);
}

function sortForm() {
    var listOperation = document.querySelectorAll('form>span');
    var listDebt = [];
    var listCredit = [];
    var resultD1=0, resultD2=0, resultD3=0, resultD4=0, resultC1=0, resultC2=0, resultC3=0, resultC4=0;
    for (var i = 0; i < listOperation.length; i = i + 5) {
      var listPush = [];
      if (listOperation[i].textContent == 'debt') {
        listPush.push (listOperation[i].textContent,listOperation[i+1].textContent, listPush.push = listOperation[i+2].textContent, listOperation[i+3].textContent,listOperation[i+4].textContent)
        listDebt.push(listPush);
      } else {
        listPush.push (listOperation[i].textContent,listOperation[i+1].textContent, listPush.push = listOperation[i+2].textContent, listOperation[i+3].textContent,listOperation[i+4].textContent)
        listCredit.push(listPush);
      }
  }
// II kv
for (var i = 0; i < listCredit.length; i++) {
  if (new Date(listCredit[i][2]) <= new Date('2018-06-30')) {
    for (var ii = 0; ii < listCredit[i].length; ii++) {
      var newspan = document.createElement('span');
      newspan.innerHTML = listCredit[i][ii];
      var domList01 = document.getElementById('kv2_2108c');
      domList01.appendChild(newspan);
    }
      createLabel('br','kv2_2108c');
      resultC2 = resultC2 + Number(listCredit[i][1]);
  }
}
// label
createLabel('span','results','Cr 2 kv');
//count d 2 kv
createLabel('span','results',resultC2);
// III kv
for (var i1 = 0; i1 < listDebt.length; i1++) {
  if (new Date(listDebt[i1][2]) <= new Date('2018-06-30')) {
  for (var ii1 = 0; ii1 < listDebt[i1].length; ii1++) {
    var newspanD = document.createElement('span');
    newspanD.innerHTML = listDebt[i1][ii1];
    var domListD = document.getElementById('kv2_2108d');
    domListD.appendChild(newspanD);
  }
      createLabel('br','kv2_2108d');
      resultD2 = resultD2 + Number(listDebt[i1][1]);
}
}
// label
createLabel('span','results','Db 2 kv');
//count d 2 kv
createLabel('span','results',resultD2);
createLabel('br','results');
// III kv
for (var i2 = 0; i2 < listCredit.length; i2++) {
  if (new Date('2018-06-30') < new Date(listCredit[i2][2])) {
    for (var ii2 = 0; ii2 < listCredit[i2].length; ii2++) {
      var newspan3 = document.createElement('span');
      newspan3.innerHTML = listCredit[i2][ii2];
      var domList3 = document.getElementById('kv3_2108c');
      domList3.appendChild(newspan3);
    }
      createLabel('br','kv3_2108c');
      resultC3 = resultC3 + Number(listCredit[i2][1]);
  }
}
// label
createLabel('span','results','Cr 3 kv');
//count d 2 kv
createLabel('span','results',resultC3);
for (var i3 = 0; i3 < listDebt.length; i3++) {
  if (new Date('2018-06-30') < new Date(listDebt[i3][2])) {
  for (var ii3 = 0; ii3 < listDebt[i3].length; ii3++) {
    var newspanD3 = document.createElement('span');
    newspanD3.innerHTML = listDebt[i3][ii3];
    var domListD3 = document.getElementById('kv3_2108d');
    domListD3.appendChild(newspanD3);
  }
      createLabel('br','kv3_2108d');
      resultD3 = resultD3 + Number(listDebt[i3][1]);
}
}
// label
createLabel('span','results','Db 3 kv');
//count d 2 kv
createLabel('span','results',resultD3);
createLabel('br','results');
// IV kv
for (var i2 = 0; i2 < listCredit.length; i2++) {
  if (new Date(listCredit[i2][2]) >= new Date('2018-12-31')) {
    for (var ii2 = 0; ii2 < listCredit[i2].length; ii2++) {
      var newspan3 = document.createElement('span');
      newspan3.innerHTML = listCredit[i2][ii2];
      var domList3 = document.getElementById('kv3_2108c');
      domList3.appendChild(newspan3);
    }
      createLabel('br','kv4_2108c');
      resultC4 = resultC4 + Number(listCredit[i2][1]);
  }
}
// label
createLabel('span','results','Cr 4 kv');
//count d 2 kv
createLabel('span','results',resultC4);
for (var i3 = 0; i3 < listDebt.length; i3++) {
  if (new Date(listDebt[i3][2]) >= new Date('2018-12-31')) {
  for (var ii3 = 0; ii3 < listDebt[i3].length; ii3++) {
    var newspanD3 = document.createElement('span');
    newspanD3.innerHTML = listDebt[i3][ii3];
    var domListD3 = document.getElementById('kv3_2108d');
    domListD3.appendChild(newspanD3);
  }
      createLabel('br','kv4_2108d');
      resultD4 = resultD4 + Number(listDebt[i3][1]);
}
}
// label
createLabel('span','results','Db 4 kv');
//count d 2 kv
createLabel('span','results',resultD4);
createLabel('br','results');
// IV kv
//function sortOpt() {
//  if (listOperation[i]) {
//  }
//}
/*    var debtType = document.getElementsByClassName('typeOperation');
    var resultOp = debtType.innerText;
    console.log(resultOp);
    var div = document.createElement('div');
    console.log(debtType);
    div.innerHTML = debtType;
    console.log(div.innerHTML);*/

// TAX
var tax1kv = Math.ceil(resultD1 * 0.06);
var tax2kv = Math.ceil(resultD2 * 0.06);
var tax3kv = Math.ceil(resultD3 * 0.06);
var tax4kv = Math.ceil(resultD4 * 0.06);
createLabel('span','tax','1 KV USN 6%  is ');
createLabel('span','tax',tax1kv);
createLabel('br','tax');
createLabel('span','tax','2 KV USN 6%  is ');
createLabel('span','tax',tax2kv);
createLabel('br','tax');
createLabel('span','tax','3 KV USN 6%  is ');
createLabel('span','tax',tax3kv);
createLabel('br','tax');
createLabel('span','tax','4 KV USN 6%  is ');
createLabel('span','tax',tax4kv);
createLabel('br','tax');


}
sortForm();
