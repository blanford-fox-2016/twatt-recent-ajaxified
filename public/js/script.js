$(document).ready(function(){
	getAllTweets()
})

function getAllTweets() {
	$.ajax({
		url: "http://localhost:3000/api/tweets",
		type: 'GET',
		datatype: 'json',
		success: function(results) {
			for(var i=0;i<results.length;i++){
				$('#mytimeline').append(`<div class="jumbotron"><p>${results[i].text}</p><p>${results[i].created_at}</p></div>`)
			}
		}
	})
}