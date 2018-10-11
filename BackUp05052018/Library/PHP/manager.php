<!DOCTYPE html>
<html>
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type">
    <title>EGY TRAIN</title>
    <link href="css/style.css" rel="stylesheet">
    <link href="css/manager.css" rel="stylesheet">
    <script async src="scripts/scripts.js"></script>
     <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  </head>
  <body>
  <header class="headermain">
    <div class="logoandmenu">
    <div class="logoname">
    <h1><a href="manager.php" class="linklogo"><img class="logo" src="img/decor_line.png" alt=""> Manager board </h1></a>
    </div>
    <div class="accwindow">
    <?php
      $mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');
      if ($mysqli->connect_errno) {
          echo "MySQL don't ready: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
      }
      $mysqli->set_charset('utf8');
      $username = addslashes(trim ( $_POST['username'] ));
      $res = $mysqli->query("SELECT `id`,`name`, `position`,`editon` FROM `account` WHERE `name`='$username'");
      echo  '<div>','<form class="" action="manager.php" method="post" name="mngupdate">',
      '<button class="upapply" type="submit" name="button">Login</button>',
      '<input class="userenter" type="text" name="username" value="" autocomplete="on"><br>','</form>','</div>',
      '<div>','<form class="" action="add.php" method="post" name="mngupdate">',
      '<button class="upapply" type="submit" name="button">ADD</button>',
      '<input class="userenter" type="hidden" name="username" value="',$username,'" autocomplete="on"><br>','</form>','</div>',
      '<div>','<form class="" action="anew.php" method="post" name="mngupdate">',
      '<button class="upapply" type="submit" name="button">Anew</button>',
      '<input class="userenter" type="hidden" name="username" value="',$username,'" autocomplete="on"><br>','</form>','</div>',
      '<div>','<form class="" action="count.php" method="post" name="mngupdate">',
      '<button class="upapply" type="submit" name="button">Count</button>',
      '<input class="userenter" type="hidden" name="username" value="',$username,'" autocomplete="on"><br>','</form>','</div>',
      "\n";
      $res->data_seek(0);
      while ($row = $res->fetch_assoc()) {
          echo "" .'<div class="miniaccount">',
          '<input type="hidden" name="id" value="',$row['id'],'">',
          $row['position'],", ",
          '<span class="miniaccspan">',$row['name'],'</span>',
          '<input id="counton" class="editonoff" type="checkbox" hidden name="edition" disabled value=""',$row['editon'],'>',
          '</div>' . "\n";
      }
      $mysqli->close();
      ?>
    </div>
    <nav class="main-menu" id="menucount">
    <ul>
      <li class="notactivepoint"><a href="index.php">Ad.board</a></li>
      <li class="activepoint"><a href="manager.php">Manager</a></li>
      <li class="notactivepoint"><a href="mngua.php">Ua <img class="flag" src="img/ukraineflag.png" alt=""></a></li></a></li>
      <li class="notactivepoint"><a href="mngrf.php">RF <img class="flag" src="img/flagrusmini.png" alt=""></a></li>
      <li class="notactivepoint"><a href="mngbelarus.php">Belarus <img class="flag" src="img/belarus.jpg" alt=""></a></li>
      <li class="notactivepoint"><a href="anew.php">Anew univer ➲</a></li>
      <li class="notactivepoint"><a href="managerex.php">Site</a></li>
      </div>
    </ul>
      </nav>

<div class="banner">
<img class="mainbanner" src="img/beach.jpg" alt="">
</div>
  </header>
<main class="mainhome" id="intoone">
<div class="maindivtwo" >
  <h2>Universities</h2>
  <!--<form class="" action="scripts/mgrupdate.php" method="post" name="add">
  <label for="country">Select country</label>
  <select class="" name="country">
  <option value="Ukraina" selected >Ukraina</option>
  <option value="Russia">Russia</option>
  <option value="Belarus">Belarus</option>
</select><br>
  <label for="type">Kind university</label>
  <select class="" name="type">
  <option value="medical" selected >medical</option>
  <option value="dental">dental</option>
  <option value="engineer">engineer</option>
  <option value="pharmacy">pharmacy</option>
  </select><br>
  <label for="city">City</label>
  <input type="text" name="city" value=""><br>
  <label for="name">name univerity</label>
  <input type="text" name="name" value=""><br>
  <label for="website">website</label>
  <input type="text" name="website" value=""><br>
<label for="info">info</label>
  <input type="text" name="info" value=""><br>
<label for="email">email</label>
  <input type="text" name="email" value=""><br>
<label for="phone">phone</label>
  <input type="text" name="phone" value=""><br>
<label for="manageruniver">manager of univerity</label>
  <input type="text" name="manageruniver" value=""><br>
<label for="medical"> medical</label>
  <input type="checkbox" name="medical" value=""><br>
<label for="dental">dental</label>
  <input type="checkbox" name="dental" value=""><br>
<label for="pharmacy">pharmacy</label>
  <input type="checkbox" name="pharmacy" value=""><br>
<label for="engineer">engineer</label>
  <input type="checkbox" name="engineer" value=""><br>
<label for="medicalfee">medical fee</label>
  <input type="text" name="medicalfee" value=""><br>
<label for="dentalfee">dental fee</label>
  <input type="text" name="dentalfee" value=""><br>
<label for="pharmacyfee">pharmacy fee</label>
  <input type="text" name="pharmacyfee" value=""><br>
<label for="engineerfee"> engineer fee</label>
  <input type="text" name="engineerfee" value=""><br>
<label for="teacheng"> teach in english</label>
  <input type="text" name="teacheng" value=""><br>
<label for="step">step</label>
  <input type="text" name="step" value=""><br>
<label for="lastanswer">last answer</label>
  <input type="text" name="lastanswer" value=""><br>
<label for="conditions">conditions</label>
  <input type="text" name="conditions" value=""><br>
<label for="status">status</label>
  <input type="text" name="status" value=""><br>
<label for="history">history</label>
<button type="submit" name="button">ANEW UNIVERSITY</button>
</form>-->
<?php
  $mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');
  if ($mysqli->connect_errno) {
      echo "MySQL don't ready: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
  }
  $mysqli->set_charset('utf8');

  $res = $mysqli->query("SELECT `id`, `art`, `country`, `city`, `type`, `name`, `website`, `info`, `email`, `phone`, `manageruniver`, `medical`, `dental`, `pharmacy`, `engineer`, `medicalfee`, `dentalfee`, `pharmacyfee`, `engineerfee`, `teacheng`, `step`, `lastanswer`, `conditions`, `status`, `history` FROM `univesiteis`");
  echo "<h2>УНИВЕРСИТЕТЫ:</h2> \n";
  $res->data_seek(0);
  while ($row = $res->fetch_assoc()) {
      echo " ➔ " .'<div class="into">','<form class="" action="scripts/mgrupdate.php" method="post" name="mngupdate">',
      '<input type="hidden" name="id" value="',$row['id'],'">',
      " art. - ",$row['art'],", ",
      '<span class="hederblock">',$row['country'],'</span>',", ",
      '<span class="hederblock">',$row['type'],'</span>',", ",
      " medical - ",'<input type="checkbox" name="" disabled value=""',$row['medical'],'>',", ",
      " dental - ",'<input type="checkbox" name="" disabled value=""',$row['dental'],'>',", ",
      " pharmacy - ", '<input type="checkbox" name="" disabled value=""',$row['pharmacy'],'>',
      " engineer - ",'<input type="checkbox" name="" disabled value=""',$row['engineer'],'>',
      '<div class="edit">',
      '<div class="fields">',
      '<label for="city">City -</label>',
      '<input class="" type="text" name="city" value="',$row['city'],'">',
      '</div>',
      '<div class="fields">',
      '<label for="name">Name -</label>',
      '<input type="text" name="name" value="',$row['name'],'">',
      '</div>',
      '<div class="fields">',
      '<label for="website"><a href="',$row['website'],'" target=_"blank">website -</a></label>',
      '<input type="url" placeholder="website.com" name="website" value="',$row['website'],'">',
      '</div>',
      '<div class="fields">',
      '<label for="info">info -</label>',
      '<input type="text" name="info" value="',$row['info'],'">',
      '</div>',
      '<div class="fields">',
      '<label for="email"><a href="mailto:',$row['email'],'" target="_blank">email -</a></label>',
      '<input type="email" placeholder="Your@email.com" name="email" value="',$row['email'],'">',
      '</div>',
      '<div class="fields">',
      '<label for="phone">phone -</label>',
      '<input type="tel" name="phone" placeholder="+3888444554487" value="',$row['phone'],'">',
      '</div>',
      '<div class="fields">',
      '<label for="manageruniver">manager of univerity -</label>',
      '<input type="text" name="manageruniver" value="',$row['manageruniver'],'">',
      '</div>',
      '<div class="fields">',
      '<label for="medicalfee">medical fee -</label>',
      '<input type="text" name="medicalfee" value="',$row['medicalfee'],'">',
      '</div>',
      '<div class="fields">',
      '<label for="dentalfee">dental fee -</label>',
      '<input type="text" name="dentalfee" value="',$row['dentalfee'],'">',
      '</div>',
      '<div class="fields">',
      '<label for="pharmacyfee">pharmacy fee -</label>',
      '<input type="text" name="pharmacyfee" value="',$row['pharmacyfee'],'">',
      '</div>',
      '<div class="fields">',
      '<label for="engineerfee">engineer fee -</label>',
      '<input type="text" name="engineerfee" value="',$row['engineerfee'],'">',
      '</div>',
      '<div class="fields">',
      '<label for="teacheng">teach on english -</label>',
      '<input type="text" name="teacheng" placeholder="Yes/No" value="',$row['teacheng'],'">',
      '</div>',
      '<div class="fields">',
      '<label for="step">step -</label>',
      '<input type="text" name="step" value="',$row['step'],'">',
      '</div>',
      '<div class="fields">',
      '<label for="lastanswer">last answer -</label>',
      '<input type="text" name="lastanswer" value="',$row['lastanswer'],'">',
      '</div>',
      '<div class="fields">',
      '<label for="conditions">conditions -</label>',
      '<input type="text" name="conditions" value="',$row['conditions'],'">',
      '</div>',
      '<div class="fields">',
      '<label for="status">status -</label>',
      '<input type="text" name="status" value="',$row['status'],'">',
      '</div>',
      '<div class="fields">',
      '<label for="history">history -</label>',
      '<input type="text" name="history" value="',$row['history'],'">',
      '</div>','</div>',
      '<button class="upapply" type="submit" name="button">Подтвердить изменения</button>',
      '</form>','</div>', '<hr>' . "\n";
  }
  $mysqli->close();
  ?>
</div>
</main>
	<footer class="footermain">
  <div class="footerdivone">
  <p>Our address: Maadi 105 st., office 1, Cairo, Egipt.
    Phone number: +20115454454 (for arabic and english),
    +79531550950 (Viber for russian) link@tcgarant.ru</p>
  </div>
  <div class="footerdivtwo"><input type="text"  placeholder="Your@email.com" name="" value="">
    <div class="test1">
    </div>
<p>All right reserved 2017.</p>
    <div class="test2">
    </div>
  </div>
    <div class="footerdivtree">
<p>Site create and support <a class="makerlink" href="http://newconstellation.ru"> &nbspNew constellation ltd &nbsp</a> &copy;2017. </p>
  </div>
</footer>
  </body>
</html>
