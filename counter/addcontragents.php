<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta name="description" content="Web site New constellation ltd. Counter - Booh.">
<script src="cmpn/head.js"></script>
</script>
</head>
<body>
<header>
  <SCRIPT LANGUAGE="JavaScript">
//document.cookie="Name=Roman; baa=true; path=/; expires=Mon, date()";
function setCookie (name, value, expires, domain) {
      document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires : "") +
        ((domain) ? "; domain=" + domain : "");

}
setCookie("Name", "Roman", "Mon","newconstellation.ru","1");

function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}
myVar = getCookie("Name");
console.log(myVar);
</SCRIPT>
<h1>DELETE STRING</h1>
</header>
<main>
<section>
<div class="article1">
  <h2>Functions</h2>
  <script src="cmpn/leftmenu.js?v2"></script>
</div>
<div class="rightside1" style="color: lightgreen;">
STATUS: DEVELOPING
</div>
</section>
<article class="article2">
</article>
</main>
</div>
<footer>
<script src="cmpn/footer.js"></script>
</footer>
</body>
</html>
