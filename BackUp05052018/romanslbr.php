<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta name="description" content="Web site New constellation ltd. Frontend and web development.">
<link rel="stylesheet" href="css/master.css">
<link rel="stylesheet" href="css/library.css">
<title>New constellation ltd. Library.</title>
<script src="scripts/exam.js"></script>
<script src="scripts/lesson.js"></script>
<script src="scripts/Captcha.js"></script>
</head>
<body>
<header>
<h1>Library</h1>
</header>
<main class="mainlibrary">
<section>
<div class="treediv">
  <h2>LIST</h2>
  <?php include_once 'scripts/tree.php' ?>
<p class="pcenter">End list</p>
</div>
<div class="">
</div>
</section>
<article class="describecode flexblock">
  Discription a code will be here
</article>
<div class="editblock flexblock">
  <form action="scripts/insertcode.php" method="post" >
    <span>Add new code now</span><br>
    <select class="editfield" name="partedit" required onBlur="alert('Выбери значение не равное ------- это пока важно.')">
      <option value="0" selected>-------</option>
      <option value="JavaScript">JavaScript</option>
      <option value="HTML">HTML</option>
      <option value="CSS">CSS</option>
      <option value="PHP">PHP</option>
      <option value="Other">Other</option>
    </select><br>
    <label for="title">Title</label><br>
    <input class="editfield" type="text" name="title" value="" required><br>
    <label for="">Algoritm</label><br>
    <input type="file" class="editfield buttons" name="file" value=""><br>
    <label for="bodycode">Code</label><br>
    <textarea class="editfield editfieldcode" type="text" name="bodycode" value="" required></textarea><br><br>
    <span>-------------------------------> </span>
    <input class="buttons" type="submit" name="Add" value="Add the code" id="buttoneditsub" disabled>
  </form>
  <div class="captcha">
    <span>Are you human? </span>
    <script type="text/javascript">DrawBotBoot()</script>
    <input class="buttons" id="Button1" type="button" value="Check" onclick="ValidBotBoot();">
  </div>
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
  <p>
    Saint-Peterspurg Russia <span class="pochta"> link@newconstellation.ru</span><a href="index.html">0000</a><a href="mantisbt-2.11.0/index.php">0002</a>
  </p>
</div>
</footer>
</body>
</html>
