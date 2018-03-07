
//click event reset button
$('#clearAll').on('click',function(){

    alert("cleared")
});

//Click event search buttton
$('#runSearch').on("click", function(event) {
    event.preventDefault();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=e597fe8f44504907a3558e207a65c21e&q=" + search;
    var search = $("#search").val();

  $.ajax({
        url: queryURL,
        method: "GET"
  })
  .then(function(response) {
       console.log(response);
  }
    )
  });