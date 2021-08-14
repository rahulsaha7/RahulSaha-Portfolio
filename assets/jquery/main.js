$(".layout").css("display","none");
$(".open-button").css("display","none");
$(document).ready(function(){
    "use strict"; 
    $(".preloader").css("display","none");
    $(".layout").css("display","grid");
    $(".open-button").css("display","block");
    if ($('.typed1').length) {
        var typed_strings = $(".typed1").data('typed-items');
        typed_strings = typed_strings.split(',')
        new Typed('.typed1', {
          strings: typed_strings,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
        });
      }

      $( "#clickme" ).click(function() {
       
      });

    
      
      $(".mobile-nav-toggle").click(function(){
        $(".sidebar").css("display","block");
        $(".sidebar").fadeIn("slow");
       
       $(".mobile-nav-toggle").css("display","none");
       $(".cross").css("display","block");
       $(".open-button").hide();
      //  $('body').css("overflow","hidden");
      particlesJS.load('particlep-js','particles.json',function(){
      });
      });


        
      $(".cross").click(function(){
       
        $(".sidebar").fadeOut("slow");
        $(".sidebar").css("display","none");
       $(".mobile-nav-toggle").css("display","block");
       $(".cross").css("display","none");
       $(".open-button").show();
      //  $('body').css("overflow","scroll");
      });

      $(".project-templates").on("vmouseup vmousemove vmousedown vmouseout",function(){
          $(".overlay").css("display","block");
      },function(){
        $(".overlay").css("display","none");

      }
      ); 

      var index = 0;
      slide();

      function slide(){
        var s = $(".slide");
        
        for (let i = 0; i < s.length; i++) {
              $(s[i]).hide();
          }
          index = index+1;
          if(index > s.length)
            index=1;
          if(index < 1)
            index = s.length;
          
          $(s[index-1]).fadeIn(2000);
          setTimeout(slide,8000);


      }


    
     
      particlesJS.load('particles-js','particles.json',function(){
 });



 $(".email-send").submit(function(e){
   e.preventDefault();
      var tempParams = {
        from_name:document.getElementById("name").value,
        from_mail:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,

      };
      $(".email-send").val("Sending...");
      emailjs.send('gmail','template_czbonru',tempParams)
      .then(function(res){
        if(res.status == 200){
          $(".email-send").val("Send");
          $("#msg").html("Send Successfull");
        }
        else{
          $("#msg").html("Can't Send Message");
        }
      });
 });




});
