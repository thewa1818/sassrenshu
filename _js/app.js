// 読み込み時
ScrollReveal().reveal('.page_top-img',{
  viewFactor: 0.6,
  reset: true
});

$(".page_top").on("click",function(){
  let position = 0;
  let speed = 500;
  $("html,body").animate({scrollTop:position},speed);
})