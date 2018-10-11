<?php
$city = addslashes(trim ( $_POST['city'] ));
$name = addslashes(trim ( $_POST['name'] ));
$website = addslashes(trim ( $_POST['website'] ));
$phone = addslashes(trim ( $_POST['phone'] ));
$email = addslashes(trim ( $_POST['email'] ));
$info = addslashes(trim ( $_POST['info'] ));
$medical = addslashes(trim ( $_POST['medical'] ));
$dental = addslashes(trim ( $_POST['dental'] ));
$pharmacy = addslashes(trim ( $_POST['pharmacy'] ));
$manageruniver = addslashes(trim ( $_POST['manageruniver'] ));
$engineer = addslashes(trim ( $_POST['engineer'] ));
$medicalfee = addslashes(trim ( $_POST['medicalfee'] ));
$dentalfee = addslashes(trim ( $_POST['dentalfee'] ));
$pharmacyfee = addslashes(trim ( $_POST['pharmacyfee'] ));
$engineerfee = addslashes(trim ( $_POST['engineerfee'] ));
$teacheng = addslashes(trim ( $_POST['teacheng'] ));
$step = addslashes(trim ( $_POST['step'] ));
$lastanswer = addslashes(trim ( $_POST['lastanswer'] ));
$conditions = addslashes(trim ( $_POST['conditions'] ));
$status = addslashes(trim ( $_POST['status'] ));
$history = addslashes(trim ( $_POST['history'] ));
$id = addslashes(trim ( $_POST['id'] ));
$mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');
if ($mysqli->connect_errno) {
    echo "MySQL don't ready: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$mysqli->set_charset('utf8');
 if   (!$mysqli->query("UPDATE univesiteis SET `email`='$email', `city`='$city',
   `website`='$website', `phone`='$phone', `info`='$info',
   `name`='$name', `manageruniver`='$manageruniver', `medical`='$medical',
   `dental`='$dental', `pharmacy`='$pharmacy', `engineer`='$engineer',
   `medicalfee`='$medicalfee', `dentalfee`='$dentalfee', `pharmacyfee`='$pharmacyfee',
   `engineerfee`='$engineerfee', `teacheng`='$teacheng', `step`='$step',
   `lastanswer`='$lastanswer', `conditions`='$conditions', `status`='$status',
   `history`='$history'
    WHERE `id`='$id'"))
 {
    echo "Не удалось создать таблицу: (" . $mysqli->errno . ") " . $mysqli->error;
}
$mysqli->close();
header ('Location: ../manager.php');
?>
