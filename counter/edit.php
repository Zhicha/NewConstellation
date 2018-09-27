<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta name="description" content="Web site New constellation ltd. Counter - Booh.">
<script src="cmpn/head.js"></script>
</script>
</head>
<body>
<header>
<h1>TO EDIT A EXISTING RECEIPT</h1>
</header>
<main>
<section>
<div class="article1">
  <h2>Functions</h2>
<script src="cmpn/leftmenu.js"></script>
</div>
<div class="">
  <?php
  $idlist = addslashes(trim ( $_POST['idlist'] ));
  $mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');
  if ($mysqli->connect_errno) {
      echo "MySQL don't ready: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
  }
  $mysqli->set_charset('utf8');

  $res = $mysqli->query("SELECT `id`,`type`, `date`, `howmuch`,`other`,`who` FROM `moneyhystory` WHERE `id`='$idlist'");
  $res->data_seek(0);
  while ($row = $res->fetch_assoc()) {
      echo
      '<form class="form-container" action="scripts/backend/edit.php" method="post" name="edit">',
        '<div class="form-title"><h2>Sign up</h2></div>',
        '<div class="form-title">Type</div>',
        '<select class="form-field" name="type">',
          '<option value="debt">Debt</option>',
          '<option value="credit">Credit</option>',
          '<option selected value="',$row['type'],'">',$row['type'],'</option>',
        '</select>',
        '<div class="form-title">Date</div>',
        '<input class="form-field dateDefault" name="Date" id="dateAdd" value="',$row['date'],'" required><br>',
        '<div class="form-title">Contragent</div>',
        '<input class="form-field" type="text" value="',$row['who'],'" name="Contragent" list="contragentsList" placeholder="Contragent name here" required><br>',
        '<div class="form-title">Sum</div>',
        '<input class="form-field" type="number" name="Sum" value="',$row['howmuch'],'" placeholder="11400" required><br>',
        '<div class="form-title">Other</div>',
        '<input class="form-field" type="text" value="',$row['other'],'" name="Other" placeholder="Other information"><br>',
        '<input class="form-field"  type="hidden" value="',$row['id'],'" name="idString">',
        '<div class="submit-container">',
          '<a href="list.php"><input class="submit-button cancelBtn" type="button" value="Cancel"></a>',
          '<input class="submit-button" type="submit" value="Submit">',
        '</div>',
    '<datalist class="" id="contragentsList">',
      '<option value="Upwork">Upwork</option>',
      '<option value="FNS">FNS</option>',
      '<option value="OMS">OMS</option>',
      '<option value="PFR">PFR</option>',
    '</datalist>';
  }
  $mysqli->close();
    ?>
</div>
<div class="rightside1">
</div>
</section>
<article class="article2">
</article>
</main>
</div>
<footer>
<script src="cmpn/footer.js"></script>
</footer>
</body>
</html>
