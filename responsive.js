(function ($) {
  $(function () {
    $(".nav_mobile #nav_toggle").click(function () {
      $("nav ul").slideToggle();
    });

    $(".nav_mobile #nav_toggle").on("click", function () {
      this.classList.toggle("active");
    });
  });
})(jQuery);
