<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta name="Add" content="Web site New constellation ltd. Counter - Booh.">
<script src="cmpn/head.js"></script>
<script defer src="scripts/add.js"></script>
</head>
<body>
<header>
<h1>TO ADD A NEW RECEIPT</h1>
</header>
<main>
<section>
<div class="article1">
  <h2>Functions</h2>
  <script src="cmpn/leftmenu.js"></script>
</div>
<div class="">
  <form class="form-container" action="scripts/backend/insertbuh01.php" method="post">
    <div class="form-title"><h2>Sign up</h2></div>
    <div class="form-title">Type</div>
    <select class="form-field" name="Type">
      <option value="debt" selected>Debt</option>
      <option value="credit">Credit</option>
    </select>
    <div class="form-title">Date</div>
    <input class="form-field dateDefault" type="date" name="Date" id="dateAdd" value="" required><br>
    <div class="form-title">Contragent</div>
    <input class="form-field" type="text" name="Contragent" list="contragentsList" placeholder="Contragent name here" required><br>
    <datalist class="" id="contragentsList">
      <option value="Upwork">Upwork</option>
      <option value="Donatation">Donatation</option>
      <option value="FNS">FNS</option>
      <option value="OMS">OMS</option>
      <option value="PFR">PFR</option>
    </datalist>
    <div class="form-title">Sum</div>
    <input class="form-field" type="number" name="Sum" value="" placeholder="11400" required><br>
    <div class="form-title">Other</div>
    <input class="form-field" type="text" name="Other" placeholder="Other information"><br>
    <div class="submit-container">
    <a href="list.php"><input class="submit-button cancelBtn" type="button" value="Cancel"></a>
    <input class="submit-button" type="submit" value="Submit">
    </div>
  </form>
</div>
<div class="rightside1">
</div>
</section>
  <article class="article2">
  </article>
  </main>
<footer>
<script src="cmpn/footer.js"></script>
</footer>
</body>
</html>
