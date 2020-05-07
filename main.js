
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
    
  // If the count down is over, write some text 
/* if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "Congratulazioni! Ora (non) puoi uscire.";
    document.getElementById("fase2").style.opacity = "0"; 
    setTimeout( function(){
    window.location.href = "https://www.youtube.com/watch?v=oyFQVZ2h0V8";}, 4500); 
  } */
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

/*//gestione video 
if(width > 1024){
var iframe = document.getElementById("myFrame");

iframe.style.position = 'absolute';
iframe.style.top='20%'; 
iframe.style.left='5%'; 
    if(selectImg.localeCompare('img/salvinidesk.jpg') == 0){
    iframe.style.position = 'fixed';
    iframe.style.width = "360px"; 
    iframe.style.height = "260px"; 
    iframe.style.top='18%'; 
    iframe.style.left='35%'; 
    }
    else if(selectImg.localeCompare('img/contedesk.jpg') == 0 || selectImg.localeCompare('img/dimaio.jpg') == 0){
    iframe.style.position = 'fixed';
    iframe.style.width = "360px"; 
    iframe.style.height = "260px"; 
    iframe.style.top='28%'; 
    iframe.style.left='5%'; 
    }
    else if(selectImg.localeCompare('img/mattarelladesk.jpg') == 0 || selectImg.localeCompare('img/melonidesk.jpg') == 0 || selectImg.localeCompare('img/zingarettidesk.jpg') == 0){
    iframe.style.position = 'fixed';
    iframe.style.width = "360px"; 
    iframe.style.height = "260px"; 
    iframe.style.top='30%'; 
    iframe.style.left='5%'; 
    }
}
else{
    var iframe = document.getElementById("myFrame");
    iframe.style.visibility = "hidden"; 
}*/

/* playAnimation = function () {
    function changeImage() {
        i = Math.floor(Math.random() * imageArray.length); 
        document.body.style.backgroundImage = 'url("' + imageArray[i] + '")';
    }
    window.setInterval(changeImage, 5000);
     
    var audio = document.getElementById("audio"); 
    
     if(audio.paused){
        audio.play();   
     }
     else 
         audio.pause();  
     }*/







