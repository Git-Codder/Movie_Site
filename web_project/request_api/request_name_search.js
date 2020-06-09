var request = require("request");

var options = {
    method: 'GET',
    url: 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/'+ movie_name,
    headers: {
      'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
      'x-rapidapi-key': '255bc6844amsh5eeff482f8d93d3p1e8bd8jsnd38d7791e32b',
      useQueryString: true
    }
  };
  
  request(options,function(error,response,body){
  
      if(!error && response.statusCode == 200)
      {
          parsedMovieData = JSON.parse(body);
          movieObj = parsedMovieData.titles[0];
          movieTitle = parsedMovieData.titles[0].title;
          movieId = parsedMovieData.titles[0].id;
          // console.log(parsedMovieData);
          console.log(movieObj);
          console.log(movieTitle);
          console.log(movieId);
      }
      else
      {
          console.log("something erorr occured");
      }
  });
  

