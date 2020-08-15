  
$(function() {
	var listHeight = $(window).innerHeight();
	var listWidth = $(window).innerWidth();
	var loc = $(location).attr('href');
	$("span#width").text(listWidth);
	$("span#height").text(listHeight);
	$("span#location").text(loc);
	$(window).resize(function(){
		$("span#width").text($(window).innerWidth());
		$("span#height").text($(window).innerHeight());
	});
	$("button#reload").click(function(){
	location.reload();
	});
	$("#changeColor").click(function(){
		$("#father").css("background-color", "#ffff00");
	});
	$("#append").click(function(){
		$("#three").append('<br/>' + "Hello ITE120!");
	});
	
	$("#toggle").click(function(){
		$("#father").toggle();
	});
	$("#event").mouseover(function(){
		$(this).text("On Mouse over");
	});
	
	$("#event").mouseout(function(){
		$(this).text("On Mouse out");
	});
	$("#event").mousedown(function(){
		$(this).text("On Mouse down");
	});
	$("#event").mouseup(function(){
		$(this).text("On Mouse up");	
	});
	$("#event").dblclick(function(){
		$(this).text("On double click");
	});
});