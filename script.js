const nav = document.querySelector("#navArea")
const btn = document.querySelector(".toggle-btn")
const mask = document.querySelector("#mask")

btn.addEventListener("click",function(){
  nav.classList.toggle("open")
})
mask.addEventListener("click",function(){
  nav.classList.remove("open")
})

// スリック

$(function () {
  $(".slider").slick({
    arrows: false,
    autoplay: false,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "8%",
    slidesToShow: 3,
  });
});

// スクロール
function scr_ani(scr, offs_max) {
  var window_h = $(window).height(),
    offs_length = $(".offs").length,
    ons_length = $(".ons").length;
  if (offs_length) {
    var first_item = offs_max - offs_length;
    for (var i = 0; i < offs_length; i++) {
      var data_scr = first_item + i;
      var offs = $('.offs[data-scr="' + data_scr + '"]');
      var target = offs.offset().top;
      var trigger = target - (window_h + scr - window_h * 0.3);
      if (trigger < 0) {
        offs.removeClass("offs").addClass("ons");
      } else {
        break;
      }
    }
  }
  if (ons_length) {
    var last_item = ons_length - 1;
    for (var i = 0; i < ons_length; i++) {
      var data_scr = last_item - i;
      var ons = $('.ons[data-scr="' + data_scr + '"]');
      var target = ons.offset().top;
      var trigger = target - (window_h + scr);
      if (trigger > 0) {
        ons.removeClass("ons").addClass("offs");
      } else {
        break;
      }
    }
  }
}
$(function () {
  /*
  スクロール出現
  */
  var scr = $(window).scrollTop();
  // スクロール出現アイテムにナンバリング
  var offs_max = $(".offs").length;
  for (var i = 0; i < offs_max; i++) {
    $(".offs").eq(i).attr("data-scr", i);
  }
  scr_ani(scr, offs_max);
  /************
  スクロール時
  ************/
  $(window).on("scroll", function () {
    var scr = $(window).scrollTop();
    /*
    スクロール出現
    */
    scr_ani(scr, offs_max);
  }); // end scroll
}); // end function
