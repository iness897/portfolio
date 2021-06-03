// ANIMATION CHARGEMENT 

let loader = document.querySelector('.loader'); 
window.addEventListener('load', () => {

loader.classList.add('fondu-out');
});

window.addEventListener('click', (e) => {

    let rond = document.createElement('div');
    rond.className = 'clickAnim'; 
    rond.style.top = `${e.pageY - 50}px`;
    rond.style.left = `${e.pageX - 50}px`; 
    document.body.appendChild(rond);
    
setTimeout(() => {
        rond.remove();
    }, 1000)
});


$(document).ready(function(){

   $(window).scroll(function(){
   	if(this.scrollY > 20) {
      $('.navbar').addClass("scroll");
      
   	}else{
      $('.navbar').removeClass("scroll");
   	}

      if (this.scrollY > 500) {
         $('.scroll-up-btn').addClass("show");
      }else{
         $('.scroll-up-btn').removeClass("show");
      }
   });
    


// SLIDE-UP

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

// TOGGLE MENU NAVBAR 

	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});


// ANIMATION HOME
var typed = new Typed(".typing", {
        strings: ["Developpeuse web junior", "Designer", "Freelance"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
   

    var typed = new Typed(".typing-2", {
        strings: ["Developpeuse web junior", "Designer", "Freelance"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });



// OWL CAROUSEL


$('.carousel').owlCarousel({
    margin: 20,
    loop : true, 
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive:{
    	0:{
         items: 1,
         nav: false
    	},
    	600:{
         items: 2,
         nav: false
    	},
    	1000:{
         items: 3,
         nav: false
    	}
    }
});


 $('.contact-form').submit((e)=>{
        e.preventDefault(); 
    });

    $('.send-msg').click(()=>{
        $fullname = $('.fullname').val();
        $email = $('.email-input').val();
        $subject = $('.subject').val();
        $message = $('.message').val();
        $('.send-msg').text("Sending...");
        $('.contact-form').addClass("disable");

        $.ajax({
            url: "message.php",
            type: "POST",
            data: "email="+$email+"&subject="+$subject+"&message="+$message,
            success: function(data){
                $errorBox = $('.error-box');
                $('.send-msg').text("Send message");
                $('.contact-form').removeClass("disable");
                if(data == "success"){
                    $fullname = $('.fullname').val("");
                    $email = $('.email-input').val("");
                    $subject = $('.subject').val("");
                    $message = $('.message').val("");
                    $errorBox.html("Your message has been sent!");
                    $errorBox.addClass("success");
                    setTimeout(()=>{
                        $errorBox.html("");
                        $errorBox.removeClass("success");
                    }, 5000);
                }else{
                    $errorBox.removeClass("success");
                    $errorBox.html("<span>* </span>" + data);
                }
            }
        });
    });
});
