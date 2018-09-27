<?php
$linkID = addslashes(trim ( $_POST['idString'] ));
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
 if   (!$mysqli->query("UPDATE moneyhystory SET  `howmuch` = '$howmuch', `other`= '$other',`type`= '$part',`date`= '$dateAdd', `who` = '$contragent' WHERE `id` = '$linkID'") || !$mysqli->query("INSERT INTO moneylog (`howmuchlog`, `whatlog`, `linkID`) VALUES ('$howmuch', '$part','$linkID')"))
 {
    echo "Не удалось создать таблицу: (" . $mysqli->errno . ") " . $mysqli->error;
}
$mysqli->close();
header ('Location: ../../list.php');
?>
