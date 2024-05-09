$(function(){
	$(".solutions").click(function(e){
		e.preventDefault();
		$(".hide-solutions").toggleClass("open");
	});
});

$(function(){
	$(".templates").click(function(e){
		e.preventDefault();
		$(".hide-templates").toggleClass("open");
	});
});

$(function(){
	$(".integrations").click(function(e){
		e.preventDefault();
		$(".hide-integrations").toggleClass("open");
	});
});

$(function(){
	$(".resources").click(function(e){
		e.preventDefault();
		$(".hide-resources").toggleClass("open");
	});
});

$(function(){
	$(".template-1").click(function(e){
		e.preventDefault();
		$(".hide-1").toggleClass("open");
	});
});

$(function(){
	$(".template-2").click(function(e){
		e.preventDefault();
		$(".hide-2").toggleClass("open");
	});
});

$(function(){
	$(".template-3").click(function(e){
		e.preventDefault();
		$(".hide-3").toggleClass("open");
	});
});

$(function(){
	$(".template-4").click(function(e){
		e.preventDefault();
		$(".hide-4").toggleClass("open");
	});
});

$(function(){
	$(".partnet-class").click(function(e){
		e.preventDefault();
		$(".hide-partner").toggleClass("open");
	});
});

$(function(){
	$(".burger").click(function(e){
		e.preventDefault();
		$(".overlay").toggleClass("open");
		$(".burger-open").toggleClass("open");
		$(".burger-close").toggleClass("open");
		$(".burger").toggleClass("hide");
		$(".mainnav").toggleClass("hide");
		$("main").toggleClass("hide");
		$("footer").toggleClass("hide");
	});
});

$(function(){
	$(".hide-aside-1").click(function(e){
		e.preventDefault();
		$(".h").toggleClass("open");
	});
});

$(function(){
	$(".hide-aside-2").click(function(e){
		e.preventDefault();
		$(".h2").toggleClass("open");
	});
});

$(function(){
	$(".hide-aside-3").click(function(e){
		e.preventDefault();
		$(".h3").toggleClass("open");
	});
});

$(function(){
	$(".cancel-fixed").click(function(e){
		e.preventDefault();
		$(".fixed-opinion").toggleClass("open");
	});
});

function scrollValue() {
	var navbar = document.getElementById('navbar');
	var scroll = window.scrollY;
	if (scroll < 100) {
		navbar.classList.remove('BgColour');
	} else {
        navbar.classList.add('BgColour');
    }
}
window.addEventListener('scroll', scrollValue);


