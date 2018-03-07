//Click event search buttton
$('#runSearch').on("click", function(){
    alert("search")
});

//click event reset button
$('#clearAll').on('click',function(){

    alert("cleared")
});


$("submit").on("click", function() {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=e597fe8f44504907a3558e207a65c21e" + search;
    var search = $("#search").val();


  $.ajax({
        url: queryURL,
        method: "GET"
  })
  .then(function(response) {
       
  }
  
  });