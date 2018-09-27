<?php
$idlist = addslashes(trim ( $_POST['idlist'] ));
$mysqli = new mysqli('localhost', 'u2739_arabic', 'Roman_2016', 'u2739485_arabic');
if ($mysqli->connect_errno) {
    echo "MySQL don't ready: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$mysqli->set_charset('utf8');

$res = $mysqli->query("SELECT `id`, `code`, `subpart`, `part` FROM `library` WHERE `id`='$idlist'");
$res->data_seek(0);
while ($row = $res->fetch_assoc()) {
    echo '<div>'," ➔ " .
    '<form action="scripts/editcode.php" method="post" name="edit">',
    '<span>Edit your code now</span><br>',
    '<input id="ideditid" class="treeinput" type="text" name="idedit" readonly value="',$row['id'],'"><br>',
    '<input type="text" class="editfield" readonly name="partedit" value="',$row['part'],'"><br>',
    '<label for="title">Title</label><br>',
    '<input class="editfield" type="text" name="title" value="',$row['subpart'],'" required><br>',
    '<label for="">Algoritm</label><br>',
    '<input type="file" class="editfield buttons" name="file" value="">',
    '<label for="bodycode">Code</label><br>',
    '<textarea class="editfield editfieldcode" name="bodycode1" required>',$row['code'],'</textarea>',
    '<br><br>',
    '<span>-------------------------------> </span>',
    '<input class="buttons" type="submit" name="edit" value="Update now" id="buttonupdate" disabled>',
    '</form>',
    '</div>';
}
$mysqli->close();
  ?>
