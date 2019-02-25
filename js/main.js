var timeleft = 23;
var downloadTimer = setInterval(function(){
  document.getElementById("spin").innerHTML = timeleft;
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("spin").innerHTML = "0"
  }
}, 1000);

var timeleftTwo = 23;
var downloadTimerTwo = setInterval(function(){
  document.getElementById("spin-two").innerHTML = timeleftTwo;
  timeleftTwo -= 1;
  if(timeleftTwo <= 0){
    clearInterval(downloadTimerTwo);
    document.getElementById("spin-two").innerHTML = "0"
  }
}, 1000);