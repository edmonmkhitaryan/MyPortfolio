function sendEmail(){ 
    Email.send({ 
       Host : "smtp.gmail.com", 
       Username : "zaqaryanm66@gmail.com", 
       Password : "vardan0141E", 
       To : "edmonmkhitaryan88@gmail.com", 
       From : document.getElementById("email").value, 
       Subject : "New Contact Form Enquiry", 
       Body : "Name: " + document.getElementById("name").value  
           + " <br> Email" + document.getElementById("email").value 
           + " <br> Pnone no" + document.getElementById("phone").value 
           + " <br> Message" + document.getElementById("message").value 
  }).then( 
    message => alert("Message Sent Succesfully") 
  ); 
  }

  (function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();