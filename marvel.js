
var bindButtons;
document.addEventListener("DOMContentLoaded", bindButtons);
var apiKey = "4ff03f9a65f4366a7774daac371323ef";
var pKey = "fbb5bfca6b46937233fa625b7c1384619c2494a7";

function bindButtons(event)
{
  var number = event.timeStamp;
  var req = new XMLHttpRequest();
  var website = 'http://gateway.marvel.com/v1/public/characters?'
  var name = document.getElementById('heroName').value;
  var web = website + name + "ts=" + number + '&apikey=' + apiKey + '&hash=' + pKey;

  document.getElementById('submit').addEventListener('click', function(event) {
    document.getElementById('heroName').textContent = "";
    document.getElementById('description').textContent = "";
  });
  req.open('GET', web, true);

  req.setRequestHeader('Content-Type', 'application/json');
  req.addEventListener('load', function () {
    if (req.status >= 200 && req.status < 400) {
      result = JSON.parse(req.responseText);
      document.getElementById('name').textContent = result.name;
      document.getElementById('description').textContent = result.description;
      document.getElementById('comics').textContent = result.comics;
    }

    event.preventDefault();
  });
  req.send(null);

}

