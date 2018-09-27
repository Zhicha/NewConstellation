<?php
$_SESSION['user_id'] = '1';
$_SESSION['user_login'] = 'Roman';
		//ставим куки и время их хранения 10 дней
		setcookie("CookieMy", 'Roman', time()+60*60*24*10);
?>
