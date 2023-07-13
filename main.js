$(".slick").slick({
  arrows: false,
  autoplay: true,
  fade: true
});

$(".toggle_btn").on("click", function() {
  $("nav").slideToggle();
  $(this).toggleClass("open");
  if($(this).hasClass("open")) {
    $(this).children("p").text("CLOSE");
  } else {
    $(this).children("p").text("MENU");
  }
});