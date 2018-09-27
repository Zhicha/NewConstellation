<!DOCTYPE html>
<html>
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type">
    <title>EGY TRAIN</title>
    <link href="css/style.css" rel="stylesheet">
    <link href="css/manager.css" rel="stylesheet">
    <script src="scripts/scripts.js"></script>
     <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  </head>
  <body>
  <header class="headermain">
    <div class="logoandmenu">
    <div class="logoname">
    <h1><a href="manager.php" class="linklogo"><img class="logo" src="img/decor_line.png" alt=""> Manager board </h1></a>
    </div>
    <nav class="main-menu">
    <ul>
      <li class="notactivepoint"><a href="index.php">Ad.board</a></li>
      <li class="notactivepoint"><a href="add.php">Manager</a></li>
      <li class="notactivepoint"><a href="ouroffer.html">Uk <img class="flag" src="img/ukraineflag.png" alt=""></a></li></a></li>
      <li class="notactivepoint"><a href="contact.html">RF <img class="flag" src="img/flagrusmini.png" alt=""></a></li>
      <li class="notactivepoint"><a href="indexru.html">Belarus <img class="flag" src="img/belarus.jpg" alt=""></a></li>
      <li class="notactivepoint"><a href="anew.php">Anew univer ➲</a></li>
      <li class="activepoint"><a href="managerex.php">Site</a></li>
      </div>
    </ul>
      </nav>
<div class="banner">
<img class="mainbanner" src="img/beach.jpg" alt="">
</div>
  </header>
<main class="mainhome">
<div class="maindivtwo">
  <h2>Universities</h2>
<p> art. 3301  UKRAINA  Medical University  FACULTY Medical - ok Dental - ok </p>
<p>Name - sdasdas dads - dsadfs -a af afdadsf</p>
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
      echo " ➔ " .'<div class="into">',
      " art. - ",$row['art'],", ",
      '<input type="text" name="country" value="',$row['country'],'">',", ",
      '<input type="text" name="type" value="',$row['type'],'">',", ",
      '<form class="" action="scripts/mgrupdate.php" method="post" name="mngupdate">',
      '<input type="hidden" name="id" value="',$row['id'],'">',
      '<label for="city">City -</label>',
      '<input type="text" name="city" value="',$row['city'],'">',", ",
      '<label for="name">Name -</label>',
      '<input type="text" name="name" value="',$row['name'],'">',", ",
      '<label for="website">website -</label>',
      '<input type="url" placeholder="website.com" name="website" value="',$row['website'],'">',", ",
      '<label for="info">info -</label>',
      '<input type="text" name="info" value="',$row['info'],'">',", ",
      '<label for="email">email -</label>',
      '<input type="email" placeholder="Your@email.com" name="email" value="',$row['email'],'">',", ",
      '<label for="phone">phone -</label>',
      '<input type="tel" name="phone" placeholder="+3888444554487" value="',$row['phone'],'">',", ",
      '<label for="manageruniver">manager of univerity -</label>',
      '<input type="text" name="manageruniver" value="',$row['manageruniver'],'">',", ",
      " medical - ",'<input type="checkbox" name="" disabled value=""',$row['medical'],'>',", ",
      " dental - ",'<input type="checkbox" name="" disabled value=""',$row['dental'],'>',", ",
      " pharmacy - ", '<input type="checkbox" name="" disabled value=""',$row['pharmacy'],'>',
      " engineer - ",'<input type="checkbox" name="" disabled value=""',$row['engineer'],'>',
      '<label for="medicalfee">medical fee -</label>',
      '<input type="text" name="medicalfee" value="',$row['medicalfee'],'">',", ",
      '<label for="dentalfee">dental fee -</label>',
      '<input type="text" name="dentalfee" value="',$row['dentalfee'],'">',", ",
      '<label for="pharmacyfee">pharmacy fee -</label>',
      '<input type="text" name="pharmacyfee" value="',$row['pharmacyfee'],'">',", ",
      '<label for="engineerfee">engineer fee -</label>',
      '<input type="text" name="engineerfee" value="',$row['engineerfee'],'">',", ",
      '<label for="teacheng">teach on english -</label>',
      '<input type="text" name="teacheng" placeholder="Yes/No" value="',$row['teacheng'],'">',", ",
      '<label for="step">step -</label>',
      '<input type="text" name="step" value="',$row['step'],'">',", ",
      '<label for="lastanswer">last answer -</label>',
      '<input type="text" name="lastanswer" value="',$row['lastanswer'],'">',", ",
      '<label for="conditions">conditions -</label>',
      '<input type="text" name="conditions" value="',$row['conditions'],'">',", ",
      '<label for="status">status -</label>',
      '<input type="text" name="status" value="',$row['status'],'">',", ",
      '<label for="history">history -</label>',
      '<input type="text" name="history" value="',$row['history'],'">',
      '<button type="submit" name="button">Подтвердить изменения</button>',
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
