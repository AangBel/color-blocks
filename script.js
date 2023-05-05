console.log("🟥 🟦 🟩 🟨");
$(document).ready(onReady);

let red = 1, blue = 1, green = 1, yellow = 1;

function onReady() {
  console.log("We have jQuery! 💲💲💲");
  let redButton = $("#red-btn");
  let blueButton = $("#blue-btn");
  let greenButton = $("#green-btn");
  let yellowButton = $("#yellow-btn");
//   $("#blocks").on("click", ".block", removeBlock);

  $("#red-btn").on("click", redAppend);
  $("#blue-btn").on("click", blueAppend, );
  $("#green-btn").on("click", greenAppend);
  $("#yellow-btn").on("click", yellowAppend);

//   $("#blocks").on("click", ".block", removeBlock);
} //end of on ready
// function redCount(){
//     $('.red-count').on("click", red +1);
// }
///----------------------------
function redAppend() {
  $("#redContainer").append('<div class="block red-fill"></div>');
  red++;
  $('#red-count').append(red);
}
function blueAppend() {
  $("#blueContainer").append('<div class="block blue-fill"></div>');
  blue++;
  blueCount();
}
function greenAppend() {
  $("#greenContainer").append('<div class="block green-fill"></div>');
  green++;
  greenCount();
}
function yellowAppend() {
  $("#yellowContainer").append('<div class="block yellow-fill"></div>');
  yellow++;
  yellowCount();
}
///----------------------------
function removeBlock(){
  $(this).remove();


// $("#redContainer").on("click", ".block", removeRed);
// $("#blueContainer").on("click", ".block", removeBlue);
// $("#greenContainer").on("click", ".block", removeGreen);
// $("#yellowContainer").on("click", ".block", removeYellow);

}

function removeRed(){
    $(this).remove();
    // $("#block").on("click", ".block", removeRed);
}

function removeBlue(){
   $(this).remove();
}

function removeGreen(){
   $(this).remove();
}

function removeYellow(){
  $(this).remove();
}

