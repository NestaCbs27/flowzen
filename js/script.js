$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

function callPhoneNumber(){
  window.open('tel:0673052057', '_self');
}

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
    if (scroll > 30){
      $("#imgLogo").addClass('shrink');
      $("#imgLogoTitle").addClass('img-title-mobile')
    } else {
      $("#imgLogo").removeClass('shrink');
      $("#imgLogoTitle").removeClass('img-title-mobile')
    }
  });