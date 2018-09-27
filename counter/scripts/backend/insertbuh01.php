<?php
$howmuch = addslashes(trim ( $_POST['Sum'] ));
$other = addslashes(trim ( $_POST['Other'] ));
$part = addslashes(trim ( $_POST['Type'] ));
$dateAdd = addslashes(trim ( $_POST['Date'] ));
$contragent = addslashes(trim ( $_POST['Contragent'] ));
$mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');
if ($mysqli->connect_errno) {
    echo "MySQL don't ready: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$mysqli->set_charset('utf8');
 if   (!$mysqli->query("INSERT INTO moneyhystory (`howmuch`,`other`,`type`,`date`,`who`) VALUES ('$howmuch','$other','$part','$dateAdd','$contragent')") || !$mysqli->query("INSERT INTO moneylog (`howmuchlog`, `whatlog`) VALUES ('$howmuch', '$part')"))
 {
    echo "Не удалось создать таблицу: (" . $mysqli->errno . ") " . $mysqli->error;
}
$mysqli->close();
header ('Location: ../../list.php');
?>
