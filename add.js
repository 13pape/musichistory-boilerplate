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
      url:"music.json"
      }).done(callbackFunction);
       
    },

   loadMoreMusic: function (callbackFunction) {
      $.ajax({
      url:"music2.json"
      }).done(callbackFunction);
    }

  };

})();

console.log("music", musicHistory.getmusic());



