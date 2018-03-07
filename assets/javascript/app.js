
//click event reset button
$('#clearAll').on('click',function(){

    alert("cleared")
});

//Click event search buttton
$('#runSearch').on("click", function(event) {
    event.preventDefault();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var search = $("#searchTerm").val();

    queryURL += '?' + $.param({
        'api-key': "e597fe8f44504907a3558e207a65c21e",
        'q': search,
      });


  $.ajax({
        url: queryURL,
        method: "GET"
  })
  .then(function(response) {
       console.log(response);
  }
    )
  });