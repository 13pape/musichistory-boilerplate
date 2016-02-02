var listMusic = document.getElementById("list_music");
listMusic.addEventListener("click", function() {
	
	var cuadroMayor = document.getElementById("cuadro_mayor");
		cuadroMayor.classList.add("visible");
		cuadroMayor.classList.remove("hidden");
	
	var cuadroMenor = document.getElementById("add_cuadro");
		cuadroMenor.classList.add("hidden");
		cuadroMenor.classList.remove("visible")
});