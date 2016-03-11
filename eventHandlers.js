"use strict";

 // document.getElementById("moreMusic").addEventListener("click", function(){
 // musicHistory.loadMoreMusic(populateSection);
 // });

$("#moreMusic").click(function(){
  	musicHistory.loadMoreMusic(populateSection);
  });

$(document).on('click', "button[class='btn btn-default deleteSong deleteColor']", function(){
	$(this).parents('.song').remove();
})


