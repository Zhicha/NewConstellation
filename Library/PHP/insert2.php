<?php
$country = addslashes(trim ( $_POST['country'] ));
$city = addslashes(trim ( $_POST['city'] ));
$name = addslashes(trim ( $_POST['name'] ));
$mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');
if ($mysqli->connect_errno) {
    echo "MySQL don't ready: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$mysqli->set_charset('utf8');
 if   (!$mysqli->query("INSERT INTO univesiteis (`country`,`city`,`name`) VALUES ('$country','$city','$name')"))
 {
    echo "Не удалось создать таблицу: (" . $mysqli->errno . ") " . $mysqli->error;
}
$mysqli->close();
header ('Location: ../index.php');
?>
