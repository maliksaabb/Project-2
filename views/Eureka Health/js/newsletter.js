
    // queryURL is the url we'll use to query the API
    var queryURL = "https://api.nytimes.com/svc/news/v3/content/all/health.json?api-key=voB5tFrjVke8lhzEShfx6GKOO0kfJUHS";
    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response){
        var health = response;

      $("#healthFeed").html(health);
      for (var i = 0; i < 3; i++) {
        response.results[i];
        $("#healthFeed").append("<p>" + response.results[i].title + "</p>");
        $("#healthFeed").append(`<a href="${response.results[i].url}">Read More...</a>`);
        console.log(response.results[i]);
      }
  
    })
     
    

