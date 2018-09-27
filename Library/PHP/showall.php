<html><head>
  
  <meta content="text/html;  charset=utf8" http-equiv="content-type">
	<link rel="stylesheet" href="css/style.css" type="text/css">  
  <title>Arabic</title>
  </head>
  <body style="font-size: 5em; text-align: center; line-height: 1.5;">
<header style="font-size: 1em; text-align: left; padding: 20px; background: #C0C0C0;">
<a href="../index.html"> <<< BACK </a> <p>Все арабские слова огласованы следующим образом: если над последней буквой нет огласовки значит это сукун, если нет 
огласовки над другими буквами, значит это фатха либо огласовка соответствующая следующей за данной буквой долгой гласной.</p>
</header> 
<?php
$mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');
if ($mysqli->connect_errno) {
    echo "MySQL don't ready: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$mysqli->set_charset('utf8');

$res = $mysqli->query("SELECT `worda`,`wordr`, `image` FROM `words`");
echo "arabic words: <br> \n";
$res->data_seek(0);
while ($row = $res->fetch_assoc()) {
    echo "   " . $row['worda']," - ",/*$row['wordr'],*/" ---> ", '<img vspace="10px" height="90px" src="../img/' . $row['image'] . '"/>' ,  '<br>', '<hr>' . "\n";
}
$mysqli->close();
?>
</body></html>