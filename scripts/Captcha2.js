    var a = Math.ceil(Math.random() * 10);
    var b = Math.ceil(Math.random() * 10);
    var c = a + b
    function DrawBotBoot1()
    {
        document.write("What is "+ a + " + " + b +"? ");
        document.write("<input id='BotBootInput1' type='text' maxlength='2' size='2' required>");
    }
    function ValidBotBoot1(){
        var d = document.getElementById('BotBootInput1').value;
        if (d == c) {
          document.getElementById('buttonupdate').disabled = false;
      } else {
        alert("Не умеешь считать!");
      }
  }
