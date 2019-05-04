$("#submit").on("click", function(event){
  event.preventDefault()
  var search = $("#heroName").val().trim()

  $.ajax({
    method: "POST",
    url:"https://mighty-brook-95893.herokuapp.com/cors/marvel",
    data: {
      "url": "http://gateway.marvel.com/v1/public/characters?name=" + search + "&",
      "key": "efd92cf6cc5e7649916c4e73939e6281"
    }
  }).then(function(data) {
   
    console.log(data.data.results[0].comics.items);
    $("#name").text(data.data.results[0].name);
    $("#description").text(data.data.results[0].description); 
    $("#thumbNail").html($("<img src="+data.data.results[0].thumbnail.path+"."+ data.data.results[0].thumbnail.extension+" >"));
    $("#comics1").text(data.data.results[0].comics.items[0].name);
    $("#comics2").text(data.data.results[0].comics.items[1].name);
    $("#comics3").text(data.data.results[0].comics.items[2].name);
    $("#comics4").text(data.data.results[0].comics.items[3].name);
    $("#comics5").text(data.data.results[0].comics.items[4].name);
     });

var apiKey = "AIzaSyB1iL9inW_ZS71ILZyjrpM2w9vSbX0fL2s";
 var queryURLBase = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=" + apiKey;
 var Finalsearch = "https://www.youtube.com/embed/";
 var YouTubeSearch = "tutorial";
 var queryURL = queryURLBase + "&q=" + search + "+" + YouTubeSearch;
 console.log(queryURL);
 //object from youtube
 //function runQuery(queryURL) {
 // AJAX Function
 $.ajax({ url: queryURL, method: "GET" })
   .done(function (YoutubeData) {
     for (var i = 0; i < 5; i++) {
       console.log("results====================================================");
       $("#name1").append("<h3>" + YoutubeData.items[i].snippet.title + "</h3>");
       $("#description1").append("<iframe src=" + Finalsearch + YoutubeData.items[i].id.videoId + ">" + "</iframe>");
       $("#clear-all").on("click", clear);
     }
   })
})
