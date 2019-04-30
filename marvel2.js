

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
    console.log(data.data.results[0]);
    $("#name").text(data.data.results[0].name);
    $("#description").text(data.data.results[0].description);
    $("#comics").text(data.data.results[0].comics.items[0].name);
    $("#thumbNail").html($("<img src="+data.data.results[0].thumbnail.path+"."+ data.data.results[0].thumbnail.extension+" >"))
  });
})