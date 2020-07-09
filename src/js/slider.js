$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    slidesToShow: 1,
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
});
