$('.responsive').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 5000,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.responsive2').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//acordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

//modal video
// Pause the video when the modal is closed
$(document).on('click', '.hanging-close, .modal-backdrop, .modal', function (event) {
  // Remove the src so the player itself gets removed, as this is the only
  // reliable way to ensure the video stops playing in IE
  $("#trailer-video-container").empty();
});
// Start playing the video whenever the trailer modal is opened
$(document).on('click', '.movie-tile', function (event) {
  var trailerYouTubeId = $(this).attr('data-trailer-youtube-id')
  var sourceUrl = 'https://www.youtube.com/embed/' + trailerYouTubeId + '?autoplay=1&html5=1';
  $("#trailer-video-container").empty().append($("<iframe></iframe>", {
    'id': 'trailer-video',
    'type': 'text-html',
    'src': sourceUrl,
    'frameborder': 0
  }));
});
// Animate in the movies when the page loads
$(document).ready(function () {
  $('.movie-tile').hide().first().show("fast", function showNext() {
    $(this).next("div").show("fast", showNext);
  });
});

/**img-hover**/
//Creates an event that fires every time the mouse moves over any div with the class of "img".
$(".img").mousemove(function(event){
  
  //Both the x and y value are calculated by taking the mouse x,y position on the page and subtracting it from the x,y position of the image on the page. "this" is the hovered element with the class of "img"
  var mousex = event.pageX - $(this).offset().left;
  var mousey = event.pageY - $(this).offset().top;
  
  
  //If you just used the mouse position values the translation effect will only go up and to the right, by subtracting half of the length / width of the imagevfrom the values  we get either a positive or negitive number so that the image will move in any direction.
  
  //The 40 controls the amount of "movement" that will happen by giving us a smaller number, feel free to change it to get the effect that you want.
  var imgx = (mousex - 200) / 70;
  var imgy = (mousey - 50) / 70;
  
  //Adds a translation css styles to the image element
  $(this).css("transform", "translate(" + imgx + "px," + imgy + "px)");
});

//This function will fire every time the user mouses off of the image. It resets the translation back to 0.
$(".img").mouseout(function(){
  $(this).css("transform", "translate(0px,0px)");
});