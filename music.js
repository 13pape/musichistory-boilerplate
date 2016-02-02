var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Just give me a reason > by Pink on the album The truth about love")
songs.unshift("Try > by Pink on the album The truth about love")

console.log("songs", songs);

var newsongs = [];

for (i = 0; i < songs.length; i++) { 
newsongs.push(songs[i].replace(">", "-"));
}
console.log(newsongs);  

var songlistElement = document.getElementById("songlist");

var songlist = songlistElement.innerHTML;

console.log("songlist", songlist);

for (var i = 0; i < newsongs.length; i++) {
	songlist += "<p>" + newsongs[i] + "</p>";
}

console.log("songlist", songlist);

songlistElement.innerHTML = songlist;


