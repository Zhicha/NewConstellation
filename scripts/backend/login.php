<?php
  $mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');
  if ($mysqli->connect_errno) {
      echo "MySQL don't ready: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
  }
  $mysqli->set_charset('utf8');
  $username = addslashes(trim ( $_POST['username'] ));
  $res = $mysqli->query("SELECT `id`,`name`, `position`,`editon` FROM `account` WHERE `name`='$username'");
  echo  '<div>','<form class="" action="ruler.php" method="post" name="mngupdate">',
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
