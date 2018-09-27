<?php
$title = addslashes(trim ( $_POST['title'] ));
$codebody = addslashes(trim ( $_POST['bodycode'] ));
$file = addslashes(trim ( $_POST['file'] ));
$part = addslashes(trim ( $_POST['partedit'] ));
$mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');
if ($mysqli->connect_errno) {
    echo "MySQL don't ready: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$mysqli->set_charset('utf8');
 if   (!$mysqli->query("INSERT INTO library (`subpart`,`code`,`part`,`algoritm`) VALUES ('$title','$codebody','$part','$file')"))
 {
    echo "Не удалось создать таблицу: (" . $mysqli->errno . ") " . $mysqli->error;
}
$mysqli->close();
header ('Location: ../romanslbr.php');
?>
