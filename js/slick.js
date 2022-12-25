$("#slick-views-testimonials-block-1-1").on(
  "init reInit afterChange",
  function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $(this)
      .find(".slick-slide-num")
      .html(
        '<span class="slick-slide-num-current">' +
          i +
          "</span> / " +
          slick.slideCount
      );
  }
);

$("#slick-views-testimonials-block-1-1-slider").slick({
  adaptiveHeight: true,
  centerMode: false,
  fade: true,
  arrows: true,
  prevArrow: $("slprev"),
  nextArrow: $("slnext"),
});

$(".slprev").on("click", function () {
  $("#slick-views-testimonials-block-1-1-slider").slick("slickPrev");
});
$(".slnext").on("click", function () {
  $("#slick-views-testimonials-block-1-1-slider").slick("slickNext");
});
