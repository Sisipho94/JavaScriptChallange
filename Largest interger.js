<html>
<body>

<p>Find the Largest Interger</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>

var x,y,z

function max_of_three(x, y, z) 
 {
   var  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}
console.log(max_of_three(60,20,35));
</script>

</body>
</html>