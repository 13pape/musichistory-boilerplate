"use strict";

var musicHistory = (function () { //global variable
var music = ["prueba"]; //private variable inside the iife

  return {
    getmusic: function () {
     return music;
    },

    loadmusic: function (callbackFunction) {
      //var musicLoader = new XMLHttpRequest();
      //musicLoader.addEventListener("load", function () {
      //music = JSON.parse(this.responseText).music_list;

      $.ajax({
    url:"https://sizzling-torch-3223.firebaseio.com/music_list/.json",
    method: "GET"
  }).done(function (songList){
    let songs = $("#songlist");
    for (let song in songList) {
      var currentSong = songList[song];
    
      songs.append(`<div class="song"><h4>${currentSong.song}</h4> 
                      <p>${currentSong.artist}  ${currentSong.album}</p> 
                      <p><button id=${song}-button class='btn btn-default deleteSong deleteColor'>Delete</button></p></div>`);
    }
  })
},

   loadMoreMusic: function (callbackFunction) {
      $.ajax({
      url:"https://sizzling-torch-3223.firebaseio.com/music_list/.json",
      method: "GET"
  }).done(function (songList){
    let songs = $("#songlist");
    for (let song in songList) {
      var currentSong = songList[song];
    
      songs.append(`<h4>${currentSong.song}</h4> 
                      <p>${currentSong.artist}  ${currentSong.album}</p>`);
    }
  })
}
}
})();

console.log("music", musicHistory.getmusic());


  












