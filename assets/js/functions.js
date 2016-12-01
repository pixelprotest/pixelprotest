var navDockThreshold = 30;
var sideDockThreshold = 80;
var scrollGradientOffset = -60;
var scrollGradientLength = 500;




$( document ).ready(function() {

  setIFrameSize();
  setParticles();

  $('.grid-box-main').mouseover(function(){
    $(this).find('.grid-box-img').addClass('nav-hover');
  });

  $('.grid-box-main').mouseleave(function(){
    $(this).find('.grid-box-img').removeClass('nav-hover')
  });


  $('.grid-box').mouseover(function(){
    $(this).find('.grid-box-img').addClass('nav-hover');
  });

  $('.grid-box').mouseleave(function(){
    $(this).find('.grid-box-img').removeClass('nav-hover')
  });

  $('.hamburger').click(function() {
    console.log('clicked the hamburger');
    if( $('.header-banner').hasClass('closed') ) {
      $('.header-banner').removeClass('closed');
      $('.header-banner').addClass('opened');
    } else {
      $('.header-banner').removeClass('opened');
      $('.header-banner').addClass('closed');
    };
  });

  // Get started!
  $(window).resize(function() {
    setIFrameSize();
  });

  $(window).scroll(function() {

    checkSideBarDocking();



    // so now the scrollGradientLength is 300.
    var scrollOpacity = ($(window).scrollTop() - scrollGradientOffset) / scrollGradientLength;
    // $('.article-grad').css('opacity', scrollOpacity);
  });
});


var checkSideBarDocking = function() {
  // let's check the position of the gutter-social
  // var gutterPosition = $('.gutter-social').offset().top;
  var viewportHeight = $(window).height()
  // var gutterThreshold = gutterPosition - (viewportHeight / 2.0);

  // check the docking of this sidebar.
  if($(window).scrollTop() > navDockThreshold) {
    reDockNavbar();
  } else {
    unDockNavbar();
  }

  // if($(window).scrollTop() > sideDockThreshold && $(window).scrollTop() < gutterThreshold) {
  //   unDockSideBar();
  // } else {
  //   reDockSideBar();
  // }
}

var setIFrameSize = function(){
  if( $('.video').length ) {
    var videoWidth = parseFloat($('.video').parent().css('width').replace('px', ''));
    // let videoWidth = $('article').width() * 1.0;
    var videoHeight = videoWidth / 1.77778;

    $('iframe').attr("width", videoWidth);
    $('iframe').attr("height", videoHeight);

    $('.video-curtain').css('width', videoWidth);
    $('.video-curtain').css('height', videoHeight);
  };
}



var reDockNavbar = function(event){
  if($('.header-banner').hasClass('docked')){
    // $('.header-banner').removeClass('docked');
  } else {
    $('.header-banner').addClass('docked');
  }
}

var unDockNavbar = function(event){
  if($('.header-banner').hasClass('docked')){
    $('.header-banner').removeClass('docked');
  } else {
    // $('.header-banner').addClass('docked');
  }
}


var setParticles = function() {
  // if( $('#particles-js').length ) {
  //   //////
  //   particlesJS("particles-js", {
  //     "particles": {
  //       "number": {
  //         "value": 120,
  //         "density": {
  //           "enable": true,
  //           "value_area": 800
  //         }
  //       },
  //       "color": {
  //         "value": "#ffffff"
  //       },
  //       "shape": {
  //         "type": "circle",
  //         "stroke": {
  //           "width": 0,
  //           "color": "#000000"
  //         },
  //         "polygon": {
  //           "nb_sides": 90
  //         },
  //         "image": {
  //           "src": "img/github.svg",
  //           "width": 100,
  //           "height": 100
  //         }
  //       },
  //       "opacity": {
  //         "value": 0.5,
  //         "random": false,
  //         "anim": {
  //           "enable": false,
  //           "speed": 1,
  //           "opacity_min": 0.1,
  //           "sync": false
  //         }
  //       },
  //       "size": {
  //         "value": 3,
  //         "random": true,
  //         "anim": {
  //           "enable": false,
  //           "speed": 40,
  //           "size_min": 0.1,
  //           "sync": false
  //         }
  //       },
  //       "line_linked": {
  //         "enable": true,
  //         "distance": 150,
  //         "color": "#ffffff",
  //         "opacity": 0.4,
  //         "width": 1
  //       },
  //       "move": {
  //         "enable": true,
  //         "speed": 2,
  //         "direction": "none",
  //         "random": false,
  //         "straight": false,
  //         "out_mode": "out",
  //         "bounce": false,
  //         "attract": {
  //           "enable": false,
  //           "rotateX": 600,
  //           "rotateY": 1200
  //         }
  //       }
  //     },
  //     "interactivity": {
  //       "detect_on": "canvas",
  //       "events": {
  //         "onhover": {
  //           "enable": true,
  //           "mode": "repulse"
  //         },
  //         "onclick": {
  //           "enable": true,
  //           "mode": "push"
  //         },
  //         "resize": true
  //       },
  //       "modes": {
  //         "grab": {
  //           "distance": 400,
  //           "line_linked": {
  //             "opacity": 1
  //           }
  //         },
  //         "bubble": {
  //           "distance": 400,
  //           "size": 40,
  //           "duration": 2,
  //           "opacity": 8,
  //           "speed": 1
  //         },
  //         "repulse": {
  //           "distance": 200,
  //           "duration": 0.4
  //         },
  //         "push": {
  //           "particles_nb": 4
  //         },
  //         "remove": {
  //           "particles_nb": 2
  //         }
  //       }
  //     },
  //     "retina_detect": true
  //   });
  // }
  // ///
}
