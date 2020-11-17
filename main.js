
// Set the date we're counting down to
var countDownDate = new Date("May 04, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = now - countDownDate;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
  // Output the result in an element with id="demo"
  document.getElementById("counter").innerHTML = days + "g:" + hours + "h:"
  + minutes + "m:" + seconds + "s";
}, 1000); 


var width = document.body.clientWidth; 
//display random images 
if(width > 1024){
var imageArray = ['img/contedesk.jpg','img/dimaio.jpg', 'img/mattarelladesk.jpg', 'img/melonidesk.jpg', 'img/zingarettidesk.jpg', 'img/salvinidesk.jpg'],
    selectImg = imageArray[Math.floor(Math.random() * imageArray.length)];
    document.body.style.backgroundImage = 'url(' + selectImg + ')';
}
else {
    imageArray = ['img/dimaiotel.jpg', 'img/contetel.jpg', 'img/salvinitel.jpg', 'img/melonitel.jpg', 'img/mattarellatel.jpg', 'img/zingarettitel.jpg'], 
    selectImg = imageArray[Math.floor(Math.random() * imageArray.length)]; 
     document.body.style.backgroundImage = 'url(' + selectImg + ')';
}