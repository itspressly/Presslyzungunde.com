const bubble1 = document.getElementById("bubble1");
document.addEventListener("mousemove", function(e){
  var x = e.clientX;
  var y = e.clientY;
  bubble1.style.top=y+"px";
  bubble1.style.left=x+"px";
})
