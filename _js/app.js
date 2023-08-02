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




      

