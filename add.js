var addMusic = document.getElementById("add_music");
addMusic.addEventListener("click", function() {
	
	var cuadroMayor = document.getElementById("cuadro_mayor");
		cuadroMayor.classList.add("hidden");
		cuadroMayor.classList.remove("visible");

	var cuadroMenor = document.getElementById("add_cuadro");
		cuadroMenor.classList.add("visible");
		cuadroMenor.classList.remove("hidden");
});

//Once the user fills out the song form and clicks the add button, 
//you should collect all values from the input fields, add the song 
//to your array of songs, and update the song list in the DOM

var prueba = document.getElementById("button");
button.addEventListener("click", function() {

	var songName = document.getElementById("song-name").value;
	console.log("songName", songName);

	var artistName = document.getElementById("artist-name").value;
	console.log("artistName", artistName);

	var albumName = document.getElementById("album-name").value;
	console.log("albumName", albumName);

	songlistElement.innerHTML += "<p>" + songName + "-" + "by" + " " + artistName + " " + "on the album" + " " + albumName +"</p>";
	songs.push("button");
	//songlistElement.document.createTextNode(songName + "-" + "by" + " " + artistName + " " + "on the album" + " " + albumName);
});



