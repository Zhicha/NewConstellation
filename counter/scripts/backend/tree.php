<?php
  $mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');
  if ($mysqli->connect_errno) {
      echo "MySQL don't ready: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
  }
  $mysqli->set_charset('utf8');

  $res = $mysqli->query("SELECT `id`,`type`, `date`, `howmuch`,`other`,`who` FROM `moneyhystory` WHERE `trash`='0'");
  $res->data_seek(0);
  while ($row = $res->fetch_assoc()) {
      echo " ➔ " .
      '<form method="post" name="describe" id="listCount">',
      '<span class="treerowbuh" id="">',$row['type'],'</span>',
      '<span class="treerowbuh" id="summ"> ',$row['howmuch'],' </span>',
      '<span class="treerowbuh" id=""> ',$row['date'],' </span>',
      '<span class="treerowbuh" id=""> ',$row['who'],' </span>',
      '<span class="treerowbuh" id=""> ',$row['other'],' </span>',
      '<input type="hidden" name="idlist" class="treeinput" readonly value="',$row['id'],'">',
      '<button class="treebutton" type="submit" formaction="edit.php">EDIT</button>',
      '<button class="treebutton" type="submit" formaction="scripts/backend/delete01.php">DELETE</button>',
      '</form>';
  }
  $mysqli->close();
  ?>
