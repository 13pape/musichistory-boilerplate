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

var musicHistory = (function () { //global variable
  var music = ["prueba"]; //private variable inside the iife

  return {
    getmusic: function () {
      return music;
    },

    loadmusic: function (callbackFunction) {
      var musicLoader = new XMLHttpRequest();

      musicLoader.addEventListener("load", function () {

      music = JSON.parse(this.responseText).music_list;

       callbackFunction(music);
      });

    musicLoader.open("GET", "music.json");
    musicLoader.send();
    },

   loadMoreMusic: function (callbackFunction) {
     var musicLoader = new XMLHttpRequest();

     musicLoader.addEventListener("load", function () {

    music = JSON.parse(this.responseText).music_list_two;

      callbackFunction(music);
      });

    musicLoader.open("GET", "music2.json");
    musicLoader.send();
    }

  };

})();

console.log("music", musicHistory.getmusic());



