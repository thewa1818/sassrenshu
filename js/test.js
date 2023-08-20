// alert();

const tasks = [
  {
    name: "Buy groceries",
    isDone: false,
    complete: function () {
      this.isDone = true;
    },
  },
  {
    name: "Clean the house",
    isDone: true,
    complete: function () {
      this.isDone = true;
    },
  },
  {
    name: "Finish work project",
    isDone: false,
    complete: function () {
      this.isDone = true;
    },
  },
];

const html = tasks.map((item, index) => {
  const v = `
  <div class="box">
  ${index}番目
  <p class="box-name">${item.name}</p>
  <p class="box-done">${item.isDone}</p>
  <button class="box-btn">ボタン</button>
  </div>`;
  return v;
});

$("#test").html(html);

$(".box-btn").on("click", function () {
  const v = $(this).siblings().eq(0).text();
  console.log(v, "vvv");
  // alert(v, "vvv");
});

// .siblings() - 全ての兄弟要素を取得する
// .children() -の中の子要素を取得
// .next()/nextAll() - 次に隣接する兄弟要素を取得する
// .prev()/prevAll() - 前に隣接する兄弟要素を取得する

//jQueryのclickを使う場合、指定したセレクタが親子で同じ場合は両方処理される。

// 子要素だけ処理したい場合は、return false;を追加する。

// ２回目以降ボックス内どこ押しても赤になる
// $(".box-btn").on("click", function () {
//   $(function () {
//     $(".box").click(function () {
//       $(this).css("background", "red");
//     });
//     return false;
//   });
// });

// 配列の中にオブジェクトが入っている場合のvalue値の取得方法
// const list = tasks.map((obj) => obj.name);
// console.log(list);

// $("#test").children().css("background", "red");
//同じ動き
// $(".box-btn").on("click", function () {
//   $(".box").siblings().css("background", "red");
// });
//別にsiblingsいらないじゃん

//子要素を検索
// const r = $("#test").parent().find("p");
// console.log(r, "子要素の取得");

// $(".box-btn").on("click", function () {
//   $("#test").filter(".box").css("background", "red");
// });

//配列にするやつJQ
// let arr = $.makeArray($(".box"));
// console.log(arr);

// const boxs = $(".box").map((a) => {
//   return a + "ああ";
// });
// console.log(boxs);

// $(".box-btn").on("click", function () {
//   $(arr).css("background", "color");
// });

// $(".box-btn").on("click", function () {
//   const arr = $.makeArray($(".box"));
//   console.log(arr);
//   const v = $(arr).css("background", "red");
//   console.log(v);
// });

// function mapFunc(item, index) {
//   const boxs = $(".box");
//   console.log(boxs, index);
//   return boxs;
// }

// $(".box-btn").click(function () {
//   $(".box").filter("div").css("background-color", "#fcf");
// });
