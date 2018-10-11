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
      '<span class="treerow">',$row['id'],'. </span>',
      '<span class="treerow">',$row['subpart'],' </span>', '</div>';
  }
  $mysqli->close();
  ?>
