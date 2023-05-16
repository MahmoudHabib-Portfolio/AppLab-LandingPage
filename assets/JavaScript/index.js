$(document).ready(function() {

    $("#color_mode").on("change", function () {
        colorModePreview(this);
    });

    function colorModePreview(ele) {
    if($(ele).prop("checked") == true){
        $(".curr1").text("99");
        $(".seas1").text("/Year");
        $(".curr2").text("240");
        $(".seas2").text("/Year");
    }
    else if($(ele).prop("checked") == false){
        $(".curr1").text("0");
        $(".seas1").text("/month");
        $(".curr2").text("99");
        $(".seas2").text("/month");
    }
};
	
	$(".next").html("&#10145;");
	$(".previous").html("&#11013;");

    /*------ Desktop Scrolling -----*/

    $("#home0").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".home-header", offsetY:0}});
    });

	$("#kfeature0").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".hrd3", offsetY:85}});
    });

    $("#pricing0").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".pricehawk", offsetY:75}});
    });

    $("#testi0").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".testimonals", offsetY:50}});
    });

    $("#faq0").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".faqhawk", offsetY:75}});
    });

    /*------ Mobile Scrolling -----*/
    $("#home1").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".home-header", offsetY:0}});
    });

    $("#kfeature1").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".feature-header", offsetY:75}});
    });

    $("#pricing1").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".pricehawk", offsetY:80}});
    });

    $("#testi1").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".testimonals", offsetY:50}});
    });

    $("#faq1").click(function() {
        gsap.to(window, {duration: 1, scrollTo:{y:".faqhawk", offsetY:75}});
    });

     /*====== Animate Heading ======*/
	 var h1 = $('.H1');
     var tl = new TimelineLite();

     tl
     .from(h1, 0.5, {y: 0, autoAlpha: 0, ease:Power1.easeOut}, '+=0.5')
     .to(h1, 0.5, {y: -15, autoAlpha: 1, ease:Power1.easeOut});

     ScrollTrigger.create({
      start: 'top -80',
      end: 99999,
      toggleClass: {className: 'scrolled',
      targets: '.navhawk'}
    });


});
