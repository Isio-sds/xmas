let my_score = 0;
let machine_score = 0;
let my_hand = 0;
let machine_hand = 0;
let aiko = 0;
let guu = "<img src='image/janken_gu.png'>";
let chokii = "<img src='image/janken_choki.png'>";
let paa = "<img src='image/janken_pa.png'>";
let gazou = [guu, chokii, paa];
$("#buttons").hide();

function sleep(msec) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, msec);
  });
}

async function delay(src, text, aiko_param, time) {
  await sleep(time);
  $("#image img").attr("src", src);
  $("#comment h1").html(text);
  if (aiko_param === 0) {
    $("#control").fadeIn(500);
    $("#comment h2").html(score());
  } else {
    $(".gu").fadeIn(500);
    $(".choki").fadeIn(500);
    $(".pa").fadeIn(500);
  }
}

function score() {
  return " ウーピー " + machine_score + " vs " + my_score + " あなた";
}

$("#control").on("click", function () {
  let au = $("#start_au");
  au[0].currenTime = 0;
  au[0].play();
  $("#control").fadeOut(500);
  $("#machine img").attr("src", "image/janken_gu.png");
  $("#image img").attr("src", "image/chiristmas/santaja.jpg");
  $(".gu").fadeIn(500);
  $(".choki").fadeIn(500);
  $(".pa").fadeIn(500);
  $("#buttons").fadeIn(500);
  $("#comment h1").html("じゃんけん");
});
$("#pon").on("click", function () {
  machine_hand = Math.floor(Math.random() * 3);
  if (machine_hand === 0) {
    view = gazou[0];
  }
  if (machine_hand === 1) {
    view = gazou[1];
  }
  if (machine_hand === 2) {
    view = gazou[2];
  }
  $("#santa_hand").html(view);
//   let a = document.getElementById("santa_hand");
//   a.innerHTML = view;
});
// $(".gu").on("click", function () {
//   let au = $("#gu_au");
//   au[0].currenTime = 0;
//   au[0].play();

//   my_hand = 0;
//   $(".choki").fadeOut(100);
//   $(".pa").fadeOut(100);
// });
// $(".choki").on("click", function () {
//   let au = $("#choki_au");
//   au[0].currenTime = 0;
//   au[0].play();

//   my_hand = 1;
//   $(".pa").fadeOut(100);
//   $(".gu").fadeOut(100);
// });
// $(".pa").on("click", function () {
//   let au = $("#pa_au");
//   au[0].currenTime = 0;
//   au[0].play();

//   my_hand = 2;
//   $(".gu").fadeOut(100);
//   $(".choki").fadeOut(100);
// });

// $(".gu, .choki, .pa").on("click", function () {
//   if (aiko === 0) {
//     $("#comment h1").html("ぽん");
//   } else {
//     $("#comment h1").html("しょ");
//   }
//   machine_hand = Math.floor(Math.random() * 3);
//   if (machine_hand === 0) {
//     $("#machine img").attr("src", "image/janken_gu.png");
//   } else if (machine_hand === 1) {
//     $("#machine img").attr("src", "image/janken_choki.png");
//   } else if (machine_hand === 2) {
//     $("#machine img").attr("src", "image/janken_pa.png");
//   }

//   if (my_hand === (machine_hand + 1) % 3) {
//     setTimeout(function () {
//       $("#lose_au")[0].play();
//     }, 1000);
//     let au = $("#lose_au");
//     au[0].currenTime = 0;

//     delay("image/ezoch/upi1.png", "負けた～!!", (aiko = 0), 1000);
//     machine_score += 1;
//   } else if (my_hand === (machine_hand + 2) % 3) {
//     setTimeout(function () {
//       $("#win_au")[0].play();
//     }, 1000);
//     let au = $("#win_au");
//     au[0].currenTime = 0;

//     delay("image/ezoch/notio3", "勝った～!!", (aiko = 0), 1000);
//     my_score += 1;
//   } else {
//     setTimeout(function () {
//       $("#aiko_au")[0].play();
//     }, 1000);
//     let au = $("#aiko_au");
//     au[0].currenTime = 0;

//     delay("image/ezoch/upi3.png", "あいこで", (aiko = 1), 1000);
//   }
// });
