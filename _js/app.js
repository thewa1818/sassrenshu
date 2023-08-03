// 読み込み時
// ScrollReveal().reveal('.page_top-img',{
//   viewFactor: 0.6,
//   reset: true
// });

// $(".page_top").on("click",function(){
//   let position = 0;
//   let speed = 500;
//   $("html,body").animate({scrollTop:position},speed);
// })

//スライドショー

// $(".main__slide-img").slick({
//   arrows: false,
//   dots: false,
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 4000,
// });

// //日付

// $(function () {
//   let month = new Date().getMonth() + 1;
//   let date = new Date().getDate();
//   let html = `<span class="section__wrapper-data">${month}月${date}日更新</span>`;

//   $(".section__wrapper-title").append(html);
// });

// //ランキングのとこ

// $(function () {
//   const $items = $(".section__wrapper-item");

//   let htmlItems = $items.map((item, index) => items);

//   console.log(htmlItems);

//   for (let i = 0; i < 10; i++) {
//     let rankingNum = `${i + 1}`;
//     console.log(rankingNum);
//     $(".imgNumber").append(rankingNum);
//   }

//   $(".section__wrapper-loop").text(rankingNum);
// });

// //追従

// $(function () {
//   var $body = $(".section__aside-info"),
//     $navTypeA = $(".section__aside-info"),
//     navTypeAOffsetTop = $navTypeA.offset().top;

//   $(window).on("scroll", function () {
//     if ($(this).scrollTop() > navTypeAOffsetTop) {
//       $body.addClass("is-fixed");
//     } else {
//       $body.removeClass("is-fixed");
//     }
//   });
// });

$(function () {
  $(window).mousemove(function (e) {
    console.log(e, "eee");

    $("#aa").html(e.clientX);
    $("#bb").html(e.clientY);

    var tate = e.clientX;
    var yoko = e.clientY;

    if (tate <= 330 && yoko <= 40) {
      $("#wrap").addClass("overlay");
      $(".modal").addClass("on");
    }
  });

  $(".modal__close").on("click", function () {
    $(".modal").removeClass("on");
    $("#wrap").removeClass("overlay");
  });
});
