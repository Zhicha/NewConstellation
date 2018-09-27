<?php
  $mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');
  if ($mysqli->connect_errno) {
      echo "MySQL don't ready: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
  }
  $mysqli->set_charset('utf8');

  $res = $mysqli->query("SELECT `id`, `subpart` FROM `library` WHERE `part`='JavaScript'");
  $res->data_seek(0);
  while ($row = $res->fetch_assoc()) {
      echo '<div>'," ➔ " .
      '<form action="romanslbr.php" method="post" name="describe">',
      '<input name="idlist" class="treeinput" readonly value="',$row['id'],'">',
      '<span class="treerow">',$row['subpart'],' </span>', '</div>',
      '<button class="treebutton" type="submit">to look</button>',
      '</form>';
  }
  $mysqli->close();
  ?>
