<?php
$title = addslashes(trim ( $_POST['title'] ));
$codebody = addslashes(trim ( $_POST['bodycode'] ));
$part = addslashes(trim ( $_POST['partedit'] ));
$mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');
if ($mysqli->connect_errno) {
    echo "MySQL don't ready: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$mysqli->set_charset('utf8');
 if   (!$mysqli->query("INSERT INTO moneyhystory (`howmuch`,`other`,`type`) VALUES ('$title','$codebody','$part')") || !$mysqli->query("INSERT INTO moneylog (`howmuchlog`, `whatlog`) VALUES ('$title', '$part')"))
 {
    echo "Не удалось создать таблицу: (" . $mysqli->errno . ") " . $mysqli->error;
}
$mysqli->close();
header ('Location: ../../../buh.php');
?>
