var bodyParser = require('body-parser'),
    request = require("request"),
    express = require('express'),
    request = require('request'),
    app = express();
    
// request(movie)

app.use(express.static("public"));
// app.use(express.static('\views',{root : __dirname });
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/views/home_page'));
app.use(express.static(__dirname + '/views/movie_template'));
app.use(express.static(__dirname + '/views/partials'));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended : true}));



var movie_Obj = {
    title: 'The Social Network',
    image: 'https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@.jpg',
    id: 'tt1285016'
};

var movie_Data = 
    {
        id: 'tt1285016',
        title: 'The Social Network ',
        year: '2010',
        length: '2h',
        rating: '7.7',
        rating_votes: '585689',
        poster: 'https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@.jpg',
        plot: 'As Harvard student  creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.',
        trailer:
        {
            id: 'vi4152690201',
            link: 'https://www.imdb.com/videoplayer/vi4152690201'
        },
        cast: 
        [
            {
            actor: 'Jesse Eisenberg',
            actor_id: 'nm0251986',
            character: 'Mark Zuckerberg'
            },
            {
            actor: 'Rooney Mara',
            actor_id: 'nm1913734',
            character: 'Erica Albright'
            },
            {
            actor: 'Bryan Barter',
            actor_id: 'nm3728884',
            character: 'Billy Olson'
            },
            {
            actor: 'Dustin Fitzsimons',
            actor_id: 'nm2951481',
            character: 'Phoenix Club President'
            },
            {
            actor: 'Joseph Mazzello',
            actor_id: 'nm0001515',
            character: 'Dustin Moskovitz'
            },
            {
            actor: 'Patrick Mapel',
            actor_id: 'nm2557308',
            character: 'Chris Hughes'
            },
            {
            actor: 'Andrew Garfield',
            actor_id: 'nm1940449',
            character: 'Eduardo Saverin'
            },
            {
            actor: 'Toby Meuli',
            actor_id: 'nm1114723',
            character: 'Phoenix Member Playing Facemash'
            },
            {
            actor: 'Alecia Svensen',
            actor_id: 'nm4087600',
            character: 'Girl at Phoenix Club'
            },
            {
            actor: 'Jami Owen',
            actor_id: 'nm4088378',
            character: 'Student Playing Facemash'
            },
            {
            actor: 'James Dastoli',
            actor_id: 'nm1498872',
            character: 'Student Playing Facemash'
            },
            {
            actor: 'Robert Dastoli',
            actor_id: 'nm1498874',
            character: 'Student Playing Facemash'
            },
            {
            actor: 'Scotty Crowe',
            actor_id: 'nm2590079',
            character: 'Student Playing Facemash'
            },
            {
            actor: 'Jayk Gallagher',
            actor_id: 'nm1879820',
            character: 'Student Playing Facemash'
            },
            {
            actor: 'Marcella Lentz-Pope',
            actor_id: 'nm1719288',
            character: "Erica's Roommate"
            }
        ],
        technical_specs: 
        [
            [ 'Runtime', '2 hr (120 min)' ],
            [ 'Sound Mix', 'Dolby Digital | DTS | SDDS | Dolby Surround 7.1' ],
            [ 'Color', 'Color' ],
            [ 'Aspect Ratio', '2.39 : 1' ],
            [
            'Camera',
            'Red One MX, Zeiss Master Prime and Angenieux Optimo Lenses'
            ],
            [
            'Laboratory',
            'DeLuxe, Hollywood (CA), USA (prints) <br> LightIRON Digital, Los Angeles (CA), USA (digital intermediate)'
            ],
            [ 'Film Length', '3,184 m (Portugal, 35 mm)' ],
            [ 'Negative Format', 'Redcode RAW' ],
            [
            'Cinematographic Process',
            'Digital Intermediate (2K) (master format) <br> Redcode RAW (4.5K) (source format)'
            ],
            [
            'Printed Film Format',
            '35 mm (anamorphic) (Fuji Eterna-CP 3513DI) <br> D-Cinema'
            ]
        ]
    }

    // var movie_object = {
    //     "movie_obj" : movie_Obj,
    //     "movie_data" : movie_Data
    // };

 
app.get('/',function(req,res){

    res.render("home_page/home_page");
    // res.send("hi this is home page");
});



// var movie_object =  {
//     movie_obj : {},
//     movie_data : {}
// };

app.post("/",function(req,res,body){
    var movie_name = req.body.movie;
    console.log(movie_name);
    


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
              var parsedMovieData_name = JSON.parse(body);
              var movieObj = parsedMovieData_name.titles[0];
              var movieTitle = parsedMovieData_name.titles[0].title;
              var movieId = parsedMovieData_name.titles[0].id;

              movie_Obj = Object.assign({},movie_Obj);
              // console.log(parsedMovieData);
            //   console.log(movieObj);
            //   console.log(movieTitle);
            //   console.log(movieId);


              var options = {
                method: 'GET',
                url: 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/'+ movieId,
                headers: {
                  'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
                  'x-rapidapi-key': '255bc6844amsh5eeff482f8d93d3p1e8bd8jsnd38d7791e32b',
                  useQueryString: true
                }
              };
              
              request(options,function(error,response,body){
              
                  if(!error && response.statusCode == 200)
                  {
                      var parsedMovieData_id = JSON.parse(body);
                    //   movie_Data = parsedMovieData_id;
                      movie_Data = Object.assign({},parsedMovieData_id);
                    //   console.log(movie_object.movie_data);
                    // console.log(movie_object);
                    var movie_object = Object.assign({},movie_Obj,movie_Data);
                    res.render("movie_template/movie_template",{movie_object : movie_object});
                    // console.log(movie_object);
                  }
                  else
                  {
                      console.log("something erorr occured");
                  }
              });
              
          }
          else
          {
              console.log("something erorr occured");
          }
      });
      

});




app.get("/movie",function(req,res){

    var movie_object = Object.assign({},movie_Obj,movie_Data);
    // movie_object.movie_obj = movie_Obj;
    // movie_object.movie_data = movie_Data;
    // console.log(movie_object.cast); 
    // console.log(movie_object);
    res.render("movie_template/movie_template",{movie_object : movie_object});
});

app.listen(3000, function () {
    console.log("App listening on port 3000!");
   });