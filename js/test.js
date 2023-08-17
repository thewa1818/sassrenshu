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
  console.log(v);
  $(".box").css("background", "red");
});
