"use strict";

var listMusic = $("#list_music");
listMusic.click(function(){
	
	var cuadroMayor = $("#cuadro_mayor");
		cuadroMayor.addClass("visible");
		cuadroMayor.removeClass("hidden");
	
	var cuadroMenor = $("#add_cuadro");
		cuadroMenor.addClass("hidden");
		cuadroMenor.removeClass("visible");
});

var addMusic = $("#add_music");
addMusic.click(function() {
  
  var cuadroMayor = $("#cuadro_mayor");
    cuadroMayor.addClass("hidden");
    cuadroMayor.removeClass("visible");

  var cuadroMenor = $("#add_cuadro");
    cuadroMenor.addClass("visible");
    cuadroMenor.removeClass("hidden");
});

