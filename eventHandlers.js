// newChatty.deleteSongRow = function(event) {
//     if (event.target.className == "deleteRow") {  // was click on a Delete button?
//       Chatty.deleteMessageFromDOM(event.target.parentNode.id);  // if so, send ID of div to delete
//     }
//   };




  document.getElementById("moreMusic").addEventListener("click", function(){
  	console.log("more button was pressed");
  	musicHistory.loadMoreMusic(populateSection);
  });