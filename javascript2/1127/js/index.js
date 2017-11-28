/*===============================================================
           wow
==================================================================*/

$(function() {
new WOW().init();

});

/*===============================================================
        Maginfic popUp(http://dimsemenov.com/plugins/magnific-popup/documentation.html)
==================================================================*/
$(function() {
$('#work').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  // other options
  gallery: {
  enabled:true
  }
});

});

/*
$('.gallery').each(function() { //뉴스처럼됨
    $(this).magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
    enabled:true
    }
});
});*/

/*===============================================================
        owl car
==================================================================*/
$(function() {
  $(".owl-carousel").owlCarousel({
  items : 3,
 });
});