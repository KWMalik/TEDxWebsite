$(document).ready(function(){
	
	$("img.rollover").hover( function() {
		$(this).stop().fadeTo(250, 1);
	}, function() {
		$(this).stop().fadeTo(250, 0.25);
	});
	
	$("div#aboutboxes div.rollover").hover( function() {
		$(this).stop().fadeTo(1000, 1);
	}, function() {
		$(this).stop().fadeTo(250, 0.05);
	});
	
	$('#featured').cycle({ 
   		fx:    'fade', 
    	speed:  2000,
    	timeout: 6000, 
    	pager: '#selector'
 	});
 	
	$("div.aboutsection").css("display","none");
 	$("a#tedlink").click( function() {
 		if( $("div#aboutted").css("display") == "block" ) return;
 		$("div.aboutsection").hide(500);
 		$("div#aboutted").show(500);
 	});
 	 	$("a#tedxlink").click( function() {
 		if( $("div#abouttedx").css("display") == "block" ) return;
 		$("div.aboutsection").hide(500);
 		$("div#abouttedx").show(500);
 	});
 	 	$("a#tedxuofmlink").click( function() {
 		if( $("div#abouttedxuofm").css("display") == "block" ) return;
 		$("div.aboutsection").hide(500);
 		$("div#abouttedxuofm").show(500);
 	});
 	
 	var inp = $("#si_contact_form2 input[type='text']");
 	inp.attr("title", "Email address");
 	inp.hinty();
 	
 	$(".answer").hide();
 	$(".initopen").show();
 	$(".question a").click( function(ev) {
 		ev.preventDefault();
 		$(this).closest(".question").next(".answer").slideToggle(300);
 	});
 
});