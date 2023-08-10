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

// $(function () {
//   $(window).mousemove(function (e) {
//     // console.log(e, "eee");

//     // $("#aa").html(e.clientX);
//     // $("#bb").html(e.clientY);

//     var tate = e.clientX;
//     var yoko = e.clientY;

//     if (tate <= 330 && yoko <= 40) {
//       $("#wrap").addClass("overlay");
//       $(".modal").addClass("on");
//     }
//   });

//   //会員登録
//   $(window).bind("scroll", function () {
//     scrollHeight = $(document).height();
//     scrollPosition = $(window).height() + $(window).scrollTop();
//     if ((scrollHeight - scrollPosition) / scrollHeight <= 0.0) {
//       //スクロールの位置が下部5%の範囲に来た場合
//       $("#wrap").addClass("overlay");
//       $(".modal__footer").addClass("on");
//     }
//   });

//   //三回押したら
//   var num = 1;

//   $(".modal__close").on("click", function () {
//     $(".modal").removeClass("on");
//     $("#wrap").removeClass("overlay");

//     num += 1;

//     if (num === 4) {
//       $(".sale").addClass("on");
//       $("#wrap").addClass("overlay");
//       $(".sale__timer").countdowntimer({
//         minutes: 30,
//         size: "lg",
//       });
//     }
//   });

//   $(".sale__close").on("click", function () {
//     $(".sale").removeClass("on");
//     $("#wrap").removeClass("overlay");
//   });

//   $(".modal__footer__close").on("click", function () {
//     $(".modal__footer").removeClass("on");
//     $("#wrap").removeClass("overlay");
//   });
// });

// $(".modal__footer__close").on("click", function () {
//   $(".modal__footer__link").removeClass("on");
//   $("#wrap").removeClass("overlay");
// });

// //利用規約
// $(".modal__footer__link").on("click", function () {
//   $(".toroku").addClass("on");
//   $(".modal__footer").removeClass("on");
// });

// $(function () {
//   //スクロールを含めた高さ
//   var scroll_y = $("textarea").get(0).scrollHeight;

//   //表示されている高さ
//   var scroll_ny = $("textarea").get(0).offsetHeight;

//   $("textarea").scroll(function () {
//     //スクロール量
//     var scroll_p = $("textarea").scrollTop();
//     var scroll = scroll_p + scroll_ny;

//     if (scroll_y < scroll) {
//       $(".btn").fadeIn();
//     }
//   });
// });
// $(".btn").on("click", function () {
//   $(".toroku").removeClass("on");
//   $("#wrap").removeClass("overlay");
// });

// //追従

// $(window).on("load", function () {
//   var adjust = 0; //スクロール時のトップ位置調整用（問題なければ0）
//   var sidebar = $(".all__wrap-main-aside"); //サイドバーを指定
//   var wrap = $(".all__wrap-main"); //ラッパーを指定

//   var adjustTop = 0;
//   var sidebarTop = parseInt(sidebar.css("top"));
//   var sidebarMax = wrap.height() + adjust - sidebar.height();

//   $(window).on("scroll", function () {
//     var h = sidebarTop + $(window).scrollTop();

//     if (h < sidebarMax) {
//       if ($(window).scrollTop() < adjust) {
//         adjustTop = 0;
//       } else {
//         adjustTop = adjust;
//       }
//       var offset = sidebarTop - adjustTop + $(window).scrollTop() + "px";
//       sidebar.animate({ top: offset }, { duration: 500, queue: false });
//     }
//   });
// });

// //３回目で広告をだしたい

// var moveCounter = 1;

// $(function () {
//   $(window).mousemove(function (e) {
//     // console.log(e, "aside");
//     console.log(moveCounter, "ああああ");

//     var asideX = e.clientX;
//     var asideY = e.clientY;
//     var move = asideX >= 1300 && asideY >= 600;

//     console.log(asideX);
//     // console.log(asideY);

//     if (asideX >= 1300 && asideY >= 600) {
//       console.log("っっっっk");
//       moveCounter++;
//       console.log(moveCounter, "いいいい");
//     }

//     // console.log(moveCounter);

//     if (moveCounter === 3) {
//       $(".aside").addClass("on");
//     }
//   });
// });

// $(".aside__close").on("click", function () {
//   $(".aside").removeClass("on");
// });

//配列操作カスタムパラメータ

var v = location.search;
console.log(v, "sss");

var vv = v.split("&");
console.log(vv, "分割");

var tt = vv.filter(function (item) {
  return item === "utm_area=tokyo";
});

// console.log(tt, "フィルター");

// if (tt.length !== 0) {
//   alert(1);
// }

var test = location.search;
console.log(test);

var arr1 = test.split("&");
console.log(arr1);

var arr2 = arr1.filter(function (item) {
  return item === "utm_num=2";
});

console.log(arr2);

if (arr2 === arr2) {
  alert("二番目");
} else if (tt === tt) {
  alert("東京");
}
