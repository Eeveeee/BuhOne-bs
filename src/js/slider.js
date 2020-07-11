$(document).ready(function () {
  $(".main-slider").slick({
    dots: true,
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    easing: "ease",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".clients-slider").slick({
    dots: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    easing: "ease",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".reviews-slider").slick({
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    easing: "ease",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          autoplay: false,
          arrows: false,
        },
      },
    ],
  });
});
