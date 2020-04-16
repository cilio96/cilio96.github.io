
// Set the date we're counting down to
var countDownDate = new Date("May 03, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("counter").innerHTML = days + "d:" + hours + "h:"
  + minutes + "m:" + seconds + "s";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "Congratulazioni! Ora (non) puoi uscire.";
    setTimeout( function(){
    window.location.href = "https://www.youtube.com/watch?v=oyFQVZ2h0V8";}, 4500); 
  }
}, 1000);

var width = document.body.clientWidth; 
//display random images 
if(width > 1024){
var imageArray = ['img/contedesk.jpg','img/dimaio.jpg', 'img/salvinidesk.jpg', 'img/mattarelladesk.jpg', 'img/melonidesk.jpg'],
    selectImg = imageArray[Math.floor(Math.random() * imageArray.length)];
    document.body.style.backgroundImage = 'url(' + selectImg + ')';
}
else {
    imageArray = ['img/dimaiotel.jpg', 'img/contetel.jpg', 'img/salvinitel.jpg', 'img/melonitel.jpg', 'img/mattarellatel.jpg'], 
    selectImg = imageArray[Math.floor(Math.random() * imageArray.length)]; 
     document.body.style.backgroundImage = 'url(' + selectImg + ')';
}
