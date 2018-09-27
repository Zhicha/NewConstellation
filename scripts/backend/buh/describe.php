<?php
$idlist = addslashes(trim ( $_POST['idlist'] ));
$mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');
if ($mysqli->connect_errno) {
    echo "MySQL don't ready: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$mysqli->set_charset('utf8');

$res = $mysqli->query("SELECT `id`, `code` FROM `library` WHERE `id`='$idlist'");
$res->data_seek(0);
while ($row = $res->fetch_assoc()) {
    echo '<div>'," ➔ " .
    '<form action="romanslbr.php" method="post" name="editor">',
    '<input type="text" class="treeinput" readonly value="',$row['id'],'">',
    '<span class="describecode">',$row['code'],' </span>', '</div>',
    '</form>';
}
$mysqli->close();
  ?>
