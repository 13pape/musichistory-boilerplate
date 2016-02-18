function populateSection(music) {
	var songs = document.getElementById("songlist");
		var outputMusic = "";
		console.log("music", music);

		for (var i = 0; i < music.length; i++) {
			var newSongs = music[i];
			console.log("newSongs", newSongs);
			//Let's build up the DOM

			outputMusic += `<div>`;
			outputMusic += `<p>${newSongs.song}</p>`;
			outputMusic += `<p>${newSongs.artist}</p>`;
			outputMusic += `<p>${newSongs.album}</p>`;
			outputMusic += "<button class='deleteSong'>Delete</button>";
			outputMusic += `</div>`;
		}

		console.log("songs", songs);
		songs.innerHTML += outputMusic;
}

musicHistory.loadmusic(populateSection);