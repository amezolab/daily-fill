$(document).ready(function() {

  // start of the Oxford dictionary API code:
  var word = "swim"
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    };
  });
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
  console.log(response.results[0].id)
  console.log(response.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]);

  // insert DOM manipulation with jquery to spit on the page
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
                       '<li>Realize you have already accomplished 2 things in the list</li>'+
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


var myIndex = 0;
        carousel();

        function carousel() {
            var i;
            var x = document.getElementsByClassName("mySlides");
            for (i = 0; i < x.length; i++) {
               x[i].style.display = "none";
            }
            myIndex++;
            if (myIndex > x.length) {myIndex = 1}
            x[myIndex-1].style.display = "block";
            setTimeout(carousel, 9000);
        }
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
      console.log(images[imageIndex]);
    }, 5000);
  var chosenImage = images[Math.floor(Math.random() * images.length)];
  console.log(chosenImage);
  $('.wrapper').css('background-image', 'url("' + chosenImage + '")');
  // $(".wrapper").attr( "background-url", url(chosenImage) );
  $(document).click(function(){
    // $("#exp").attr("background-url", chosenImage);
    });
  });
});