<?php
$idedit = addslashes(trim ( $_POST['idedit'] ));
$title = addslashes(trim ( $_POST['title'] ));
$codebody = addslashes(trim ( $_POST['bodycode1'] ));
$mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');
if ($mysqli->connect_errno) {
    echo "MySQL don't ready: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$mysqli->set_charset('utf8');
 if   (!$mysqli->query("UPDATE library SET  `subpart` = '$title', `code`= '$codebody' WHERE `id` = '$idedit'"))
 {
    echo "Не удалось создать таблицу: (" . $mysqli->errno . ") " . $mysqli->error;
}
$mysqli->close();
header ('Location: ../romanslbr.php');
?>
