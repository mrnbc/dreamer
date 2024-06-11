var countDownDate = new Date("Jun 12, 2024 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("clock").innerHTML = hours + " : "
  + minutes + " : " + seconds + " ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "became true";
    document.getElementById("image").style="display:block;";
    document.getElementById("clocksound").style="display:none;";
  }
}, 1000);