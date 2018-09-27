<?php
  $mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');
  if ($mysqli->connect_errno) {
      echo "MySQL don't ready: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
  }
  $mysqli->set_charset('utf8');

  $res = $mysqli->query("SELECT `id`,`type`, `date`, `howmuch` FROM `moneyhystory` WHERE `trash`='0'");
  $res->data_seek(0);
  while ($row = $res->fetch_assoc()) {
      echo '<div>'," ➔ " .
      '<form action="buh.php" method="post" name="describe">',
      '<input name="idlist" class="treeinput" readonly value="',$row['type'],'">',
      '<span class="treerowbuh" id="summ">',$row['howmuch'],' </span><span> руб.</span>', '</div>',
      '<button class="treebutton" type="submit">to look</button>',
      '</form>',
        '<form action="scripts/backend/buh/delete.php" method="post" name="describe">',
        '<input name="idlist" class="treeinput" readonly value="',$row['id'],'">',
        '<button class="treebutton" type="submit">DELETE</button>',
      '</form>';
  }
  $mysqli->close();
  ?>
