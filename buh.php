<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta name="description" content="Web site New constellation ltd. Frontend and web development.">
<link rel="stylesheet" href="css/master.css">
<link rel="stylesheet" href="css/library.css">
<title>New constellation ltd. Counter.</title>
<script src="scripts/Captcha.js"></script>
<script src="scripts/Captcha2.js"></script>
<script defer src="scripts/buh.js"></script>
</head>
<body>
<header>
<h1>Counter</h1>
</header>
<main class="mainlibrary">
<section>
<div class="treediv">
  <h2>LIST</h2>
  <?php include_once 'scripts/backend/buh/tree.php' ?>
<p class="pcenter">End list</p>
</div>
<div class="">
</div>
</section>
<article class="describecode flexblock">
  <h2>Discription a code will be here</h2>
  <?php include_once 'scripts/backend/buh/describe.php' ?>
</article>
<div class="editblock flexblock">
  <form action="scripts/backend/buh/insertcode.php" method="post" name="insert">
    <span>Add new code now</span><br>
    <select class="editfield" name="partedit" required>
      <option value="my" selected>my</option>
      <option value="debt">debt</option>
    </select><br>
    <label for="title">Title</label><br>
    <input class="editfield" type="text" name="title" value="" required><br>
    <label for="">Algoritm</label><br>
    <input type="file" class="editfield buttons" name="file" value=""><br>
    <label for="bodycode">Code</label><br>
    <textarea class="editfield editfieldcode" type="text" name="bodycode" value="" required></textarea><br><br>
    <span>-------------------------------> </span>
    <input class="buttons" type="submit" name="Add" value="Add money" id="buttoneditsub" disabled>
  </form>
  <div class="captcha">
    <span>Are you human? </span>
    <script type="text/javascript">DrawBotBoot()</script>
    <input class="buttons" id="Button1" type="button" value="Check" onclick="ValidBotBoot();">
  </div>
<br>
<hr>
<br>
  <?php include_once 'scripts/backend/toeditor.php' ?>
  <div class="captcha">
    <span>Are you human? </span>
    <script type="text/javascript">DrawBotBoot1()</script>
    <input class="buttons" id="Button3" type="button" value="Check" onclick="ValidBotBoot1();">
  </div>
</div>
<div class="taxIP">
  
</div>
</main>
</div>
<footer>
<div class="">
  <p>
    New constellation ltd &#174; Frontend development company.
  </p>
</div>
<div class="">
  <p>
    All right reserved &#169; 2012 - 2018
  </p>
</div>
<div class="">
  <p><script src="cmpn/botmenu.js"></script></p>
</div>
</footer>
</body>
</html>
