
 $(document).ready(function(){
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += "active";
}


});
 $(document).ready(function(){
  $(".load").fadeOut("slow");
  $('#date').datepicker({});
  
$(window).bind('scroll', function(){
    if($(this).scrollTop() > 20) {
        $(".btn-2").show();
	} else {
			 $(".btn-2").hide();
		}
    });
});


$(".btn-2").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
  }); 
  
  function blink_text() {
	  
	  $(".btn-2").fadeOut(1000);
	  $(".btn-2").fadeIn(1000);
  }
  setInterval(blink_text, 1000);
  
  
  var elements = [$("#services"),$("#about"),$("#home")];
var targets = [$(".about-us"),$(".icons"), $(".slideshow-container")];

  elements.map(function(item, index) {
	  item.click(function() {
		  $("html, body").animate({
			scrollTop: targets[index].offset().top
		  }, 1000);			 
  });
  

     $(document).on('contextmenu', '.active', function() { 
	  console.log('Right Mouse Clicked');
	  
  });
  
  $(document).on('click', '.active', function(){
	  console.log('Left Mouse Clicked');
  });
  
  var $sun = $('.sun');
  var $win = $(window);
  
  $win.on('scroll', function () {
	var image = "https://images.freeimages.com/images/premium/previews/3181/31811078-black-and-white-sun.jpg";
	var top = $win.scrollTop() / 3;
	$sun.css('transform', 'rotate(' + top + 'deg)');
	console.log("scrollTop");
		
		
  });
  $win.on('click', function () {
	console.log('clicked');
	
	$(".sun").css('transform', 'rotate(180deg)');
  });
  
  
 });

 


 
