<?php
$city = addslashes(trim ( $_POST['city'] ));
$mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');
if ($mysqli->connect_errno) {
    echo "MySQL don't ready: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$mysqli->set_charset('utf8');
 if   (!$mysqli->query("UPDATE univesiteis SET `dental`='checked' WHERE `city`='$city'"))
 {
    echo "Не удалось создать таблицу: (" . $mysqli->errno . ") " . $mysqli->error;
}
$mysqli->close();
header ('Location: ../index.php');
?>
