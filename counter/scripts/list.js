var resultD1=0, resultD2=0, resultD3=0, resultD4=0, resultC1=0, resultC2=0, resultC3=0, resultC4=0;
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
  function datasSort(kv,htmlid,list,dcN) {
    var resultCD = 0;
    if (kv == 1) {
       kvBegin = new Date('2018-01-01');
       kvEnd = new Date('2018-03-31');
    } else if (kv == 2) {
      kvBegin = new Date('2018-04-01');
      kvEnd = new Date('2018-06-30');
    } else if (kv == 3) {
      kvBegin = new Date('2018-07-01');
      kvEnd = new Date('2018-09-30');
    } else if (kv == 4) {
      kvBegin = new Date('2018-09-30');
      kvEnd = new Date('2018-12-31');
    } else {
      console.log('quarter or Year incorrect');
      return;
    }
    console.log(kvBegin,kvEnd);
    for (var i = 0; i < list.length; i++) {
      if (kvBegin < new Date(list[i][2]) && new Date(list[i][2]) <= kvEnd) {
      for (var ii = 0; ii < list[i].length; ii++) {
        var newspanD3 = document.createElement('span');
        newspanD3.innerHTML = list[i][ii];
        var domListD3 = document.getElementById(htmlid);
        domListD3.appendChild(newspanD3);
      }
          createLabel('br',htmlid);
          resultCD = resultCD + Number(list[i][1]);
        }
      }
    if (dcN==1) resultD1 = resultCD;
    if (dcN==2) resultD2 = resultCD;
    if (dcN==3) resultD3 = resultCD;
    if (dcN==4) resultD4 = resultCD;
    if (dcN==-1) resultC1 = resultCD;
    if (dcN==-2) resultC2 = resultCD;
    if (dcN==-3) resultC3 = resultCD;
    if (dcN==-4) resultC4 = resultCD;
  }
// I kv
datasSort(1,'kv1_2108c',listCredit,-1);
// label
createLabel('span','results','Cr 1 kv');
//count d 1 kv
createLabel('span','results',resultC1);
//Debt
datasSort(1,'kv1_2108d',listDebt,1);
// label
createLabel('span','results','Db 1 kv');
//count d 2 kv
createLabel('span','results',resultD1);
createLabel('br','results');
// II kv
datasSort(2,'kv2_2108c',listCredit,-2);
// label
createLabel('span','results','Cr 2 kv');
//count d 2 kv
createLabel('span','results',resultC2);
//Debt
datasSort(2,'kv2_2108d',listDebt,2);
// label
createLabel('span','results','Db 2 kv');
//count d 2 kv
createLabel('span','results',resultD2);
createLabel('br','results');
// III kv
datasSort(3,'kv3_2108c',listCredit,-3);
// label
createLabel('span','results','Cr 3 kv');
//count d 2 kv
createLabel('span','results',resultC3);
datasSort(3,'kv3_2108d',listDebt,3)
// label
createLabel('span','results','Db 3 kv');
//count d 2 kv
createLabel('span','results',resultD3);
createLabel('br','results');
// IV kv
datasSort(4,'kv4_2108c',listCredit,-4);
// label
createLabel('span','results','Cr 4 kv');
//count d 2 kv
createLabel('span','results',resultC4);
datasSort(4,'kv4_2108d',listDebt,4);
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
