$(document).ready(function() {


function createNewButtons(){
  var newButtonText = $('#added_btn').val();
  console.log(newButtonText);
  topics.push(newButtonText);
  createButtons();
  // Add a submit button on click function //on an input id animal_input.val() (once submit is hit), attach the input id name.val() do this inside the on click for submit, clear submit by setting val("").
  // call createnewbutton function (first thing inside the submit button function, clear the prior, add the button #.val()
};

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
    $('#exp').css('background-image', 'url("' + chosenImage + '")');

    // $(".wrapper").attr( "background-url", url(chosenImage) );

    // $('#exp').css('background-image', 'url(' + encodeURIComponent(chosenImage) + ')');
    // $(document).click(function(){
      
    // $("#exp").attr("background-url", chosenImage);
    // });

    });
  });
