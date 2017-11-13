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
