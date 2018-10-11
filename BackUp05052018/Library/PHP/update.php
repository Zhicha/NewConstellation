<?php
$country = addslashes(trim ( $_POST['country'] ));
$city = addslashes(trim ( $_POST['city'] ));
$name = addslashes(trim ( $_POST['name'] ));
$website = addslashes(trim ( $_POST['website'] ));
$phone = addslashes(trim ( $_POST['phone'] ));
$mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');
if ($mysqli->connect_errno) {
    echo "MySQL don't ready: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$mysqli->set_charset('utf8');
 if   (!$mysqli->query("UPDATE univesiteis SET `country`='$country', `city`='$city',`website`='$website', `phone`='$phone' WHERE `name`='$name'"))
 {
    echo "Не удалось создать таблицу: (" . $mysqli->errno . ") " . $mysqli->error;
}
$mysqli->close();
header ('Location: ../index.php');
?>
