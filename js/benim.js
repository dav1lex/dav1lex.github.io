const target = document.getElementById('phone');
const btn = document.getElementById('button');
btn.onclick = function showorno (){
	
	if(target.style.visibility == "hidden"){
		target.style.visibility = "visible";
	}else{
		target.style.visibility = "hidden";
	}		
}

$('.test, .nav-link, .navbar-brand, .new-button').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 1500);
});