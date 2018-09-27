<?php
$idlist = addslashes(trim ( $_POST['idlist'] ));
$mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');
if ($mysqli->connect_errno) {
    echo "MySQL don't ready: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$mysqli->set_charset('utf8');
 if   (!$mysqli->query("DELETE FROM moneyhystory WHERE `id` = '$idlist'") || !$mysqli->query("INSERT INTO moneylog (`whatlog`) VALUES ('$idlist')"))
 {
    echo "Не удалось создать таблицу: (" . $mysqli->errno . ") " . $mysqli->error;
}
$mysqli->close();
header ('Location: ../../list.php');
?>
