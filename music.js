"use strict";

function populateSection(musicList) {
	// var songs = document.getElementById("songlist");
	console.log("musicList", musicList);
	var music = musicList.music_list;
	var songs = $("#songlist");
		var outputMusic = "";
		console.log("music", music);

		for (var i = 0; i < music.length; i++) {
			var newSongs = music[i];
			console.log("newSongs", newSongs);
			//Let's build up the DOM

			outputMusic += `<div class="row song">`;

			//start column for song info
				outputMusic += `<div class="col-md-8">`
				outputMusic += `<h4>${newSongs.song}</h4>`;
				outputMusic += `<p>${newSongs.artist}  ${newSongs.album}</p>`;
				//outputMusic += `<p>${newSongs.album}</p>`;
				outputMusic += `</div>`
			//end column for song info
				outputMusic += `<div class="col-md-4">`
				outputMusic += "<button class='btn btn-default deleteSong deleteColor'>Delete</button>";
				outputMusic += `</div>`
				outputMusic += `</div>`;
		}

		console.log("songs", songs);
		// songs.innerHTML += outputMusic;
		songs.append(outputMusic);


	$("#addSongButton").click(function(event){
		console.log("addSongButton", event);

		var songName = $("#song-name").val();
		console.log("songName", songName);

		var artistName = $("#artist-name").val();
		console.log("artistName", artistName);

		var albumName = $("#album-name").val();
		console.log("albumName", albumName);

		var outputNewMusic = `<div class="row song">`;
		outputNewMusic += `<div class="col-md-8">`
		outputNewMusic += `<h4>${songName}</h4>`;
		outputNewMusic += `<p>${artistName}  ${albumName}</p>`;
		outputNewMusic += `</div>`
		outputNewMusic += `<div class="col-md-4">`
		outputNewMusic += "<button class='btn btn-default deleteSong deleteColor'>Delete</button>";
		outputNewMusic += `</div>`
		outputNewMusic += `</div>`;


		$("#songlist").append(outputNewMusic);

	});
}

musicHistory.loadmusic(populateSection);


