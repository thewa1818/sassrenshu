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

$(function(){
  let month = new Date().getMonth() + 1;
  let date = new Date().getDate();
  let html = `<span class="section__wrapper-data">${month}月${date}日更新</span>`

  $(".section__wrapper-title").append(html);
});

$(function(){
  let items = $(".section__wrapper-item")

  let htmlItems = items.map((item,index)=>{
   return items
  })

  console.log(htmlItems)

  // $(".section__wrapper-loop").append(`${htmlItems}`);

});

for (let i = 0; i < 10; i++) {
  console.log("現在" + (i+1) + "回目の処理です。");
  let rankingNum= `${i+1}`
  console.log(rankingNum)
  $(".imgNumver").append(rankingNum);
}

console.log($(window).scrollTop())


$(".main__slide-img").slick({
  arrows:false,
  dots: false,
  infinite: true,
  autoplay :true,
  autoplaySpeed: 4000,
});