<?php
$mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');

/*
 * Это "официальный" объектно-ориентированный способ сделать это
 * однако $connect_error не работал вплоть до версий PHP 5.2.9 и 5.3.0.
 */
if ($mysqli->connect_error) {
    die('Ошибка подключения (' . $mysqli->connect_errno . ') '
            . $mysqli->connect_error);
}
echo 'Data base ready... ' . $mysqli->host_info . "\n";
$mysqli->close();
?>