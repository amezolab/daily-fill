$(document).ready(function() {

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    };
  });

window.onload = function() {
        L.mapquest.key = "v97OoOgR46iLULAXZTn2SpxoOCveRf0p";

        var map = L.mapquest.map('map', {
          center: [39.680532, -104.964890],
          layers: L.mapquest.tileLayer('map'),
          zoom: 10
        });

        map.addLayer(L.mapquest.trafficLayer());
        // map.addLayer(L.mapquest.incidentsLayer());
        // map.addLayer(L.mapquest.marketsLayer());
      };

//weather functionality
 !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://weatherwidget.io/js/widget.min.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","weatherwidget-io-js");
  // start of the Oxford dictionary API code:
  // var word = "xylitol"
  // var words = ["alacrity", "arcane", "candor", "embezzle", "haughty"];

  // var word = function (words) {
  //  words[Math.floor(Math.random() * words.length)];
  // };

// document.getElementById("word").textContent = word;
var words = ["alacrity","avarice", "despot", "erudite", "gratuitous", "haughty", "intrepid", "schadenfreude"];
var word = words[Math.floor(Math.random() * words.length)];

  var query = "https://od-api.oxforddictionaries.com/api/v1";
  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://od-api.oxforddictionaries.com:443/api/v1/entries/en/" + word,
  "method": "GET",
  "headers": {
    "accept": "application/json",
    "app_id": "351e3867",
    "app_key": "c79bbe28aabd6bee129807ec7edb637f",
    "cache-control": "no-cache",
    "postman-token": "a806e579-f160-503a-0deb-01ce85c57ad3"
  }
};

$.ajax(settings).done(function (response) {
  console.log(word);

  var wordOfDay = $("#word-of-day")
  var wordOfDayDescrip = $("#word-of-day-descrip")

  wordOfDay.html(response.results[0].id)
  console.log(wordOfDay);
  wordOfDayDescrip.html(response.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0])

  // wordOfDay.html(response.results[0].id);
  // console.log(wordOfDay);
  // wordOfDayDescrip.html(response.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]);

});

(function(){

  var list = document.querySelector('#list'),
      form = document.querySelector('form'),
      item = document.querySelector('#item');

  form.addEventListener('submit',function(e){
    e.preventDefault();
    list.innerHTML += '<li>' + item.value + '</li>';
    store();
    item.value = "";
  },false)

  list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked');
    }
    store();
  },false)

  function store() {
    window.localStorage.myitems = list.innerHTML;
  }

  function getValues() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
      list.innerHTML = '<li>Make a to do list</li>'+
                       '<li>Check off first thing on the to do list</li>'+
                       '<li>Make sure to hug your lemur</li>' +
                       '<li>Yay you have accomplished 2 things</li>'+
                       '<li>Reward yourself with a nap</li>';
    }
    else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
})();


var now = new Date().toLocaleDateString();
$("#date").html(now);

var time = (moment().format("hh:mm A"));
$("#time").html(time);

console.log(time);

var myIndex = 0;

console.log(document.querySelector("#meme"));

var carouselsObject = {
  carousels: [],
  addCarousel: function(cssID){
    this.carousels.push({
      id: cssID,
      currentIndex: 0,
      carouselLength: document.querySelectorAll("#" + cssID + " .mySlides"),
    })
  },
  play: function() {
    for (var i = 0; i < this.carousels.length; i++) {
      this.carousels[i].currentIndex++;
      var slides = document.querySelectorAll("#" + this.carousels[i].id + " .mySlides");
      if(this.carousels[i].currentIndex >= slides.length){
        this.carousels[i].currentIndex = 0;
      }

      console.log(slides);
      for (var i2 = 0; i2 < slides.length; i2++){
        if(i2 == this.carousels[i].currentIndex){
          slides[i2].style.display = "block";
        }else {
          slides[i2].style.display = "none";
        };
      };
    };
    setTimeout(carouselsObject.play.bind(this), 9000);
  },
};

carouselsObject.addCarousel("workouts");
carouselsObject.addCarousel("meme");
carouselsObject.play();

// start of the Unsplash API code:
var queryUrl = "https://api.unsplash.com/photos/?client_id=64a65912239f66f48cefb32dcc6b2f453cb84943b46d69b79dc8a1df4f257016";

var images = [];
  $.ajax({
  url: queryUrl,
  method: 'GET',
  }).done(function(response){
    console.log(response);
    // console.log(response[0].likes);
    for (var i = response.length - 1; i >= 0; i--) {
      console.log(response[i]);
      images.push(response[i].urls.full);
    };
    console.log(images);

    var imageIndex = -1;
    var myTimer = setInterval(function(){
      if(imageIndex == images.length -2){
        imageIndex = -1;
      }
      imageIndex++;
    $(".wrapper").css('background-image', 'url("' + chosenImage + '")');
    }, 9000);

  var chosenImage = images[Math.floor(Math.random() * images.length)];
  var secondImage = images[8];
  var thirdImage = images[5];
  $('.wrapper').css('background-image', 'url("' + chosenImage + '")');

  $(document).click(function(){
    $(".wrapper").css('background-image', 'url("' + secondImage + '")');
    $(".wrapper").css('background-image', 'url("' + thirdImage + '")');

    });
  });
});
