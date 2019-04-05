    
<!DOCTYPE html>
<html>
<head>

<h3>JavaScript getDay()</h3>

<p id="demo"></p>

<script>
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("demo").innerHTML = days[d.getDay()];
document.getElementById("demo").innerHTML = "Today is :" + days[d.getDay()];
</script>
</head>
<body>
<p id="dem"></p>

<script>
var time = "";
var t = new Date();
time = t.getHours() +"PM"+ ":" + t.getMinutes() + ":" + t.getSeconds();
document.getElementById("dem").innerHTML = "Current time is:" + time
</script>
</body>
</html>