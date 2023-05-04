console.log("🟥 🟦 🟩 🟨");
$(document).ready(onReady);

function onReady() {
  //console.log("We have jQuery! 💲💲💲");
 $('#red-btn').on('click', addRed);

 $('#blocks').on('click','.block', removeRed);
 }//end of onReady

 function addRed(){
    console.log('anything');
   $('#blocks').append('<div class="block red-fill"></div>');
 } //end appendRed

function removeRed(){
    $(this).remove();

//  $('#redContainer').on('click', removeRed);
 }//end to removeRed

 //-----------------------------------------
//   let redBtn = $("#block red-fill");
//   console.log("red-Btn:", redBtn);

//   let blueBtn = $("#block blue-fill");
//   console.log("blue-Btn:", blueBtn);

//   let greenBtn = $("#block green-fill");
//   console.log("green-Btn:", greenBtn);

//   let yellowBtn = $("#block yellow-fill");
//   console.log("yellow-Btn:", yellowBtn);

 //end for function onReady

  //end for appendRed

//   function appendBlue() {
//     $("#blueContainer").append('<div class="block blue-fill"></div>');
//   } //end for appendBlue

//   function appendGreen() {
//     $("#greenContainer").append('<div class="block green-fill"></div>');
//   } //end for appendGreen

//   function appendYellow() {
//     $("#yellowContainer").append('<div class="block yellow-fill"></div>');
//   } //end for appendYellow



// $('#blue-Btn').on('click', appendBlue);
// $('#blue-fillContainer').on('click').remove(appendBlue);
// $('#blueContainer').on('click', '.blue' , removeBlue);
// function removeBlue(){
//     $(this).remove();
// }

// $('#green-Btn').on('click', appendGreen);
// $('#greenContainer').on('click').remove(appendGreen);
// $('#greenContainer').on('click', '.green' , removeGreen);
// function removeGreen(){
//     $(this).remove();
// }

// $('#yellow-Btn').on('click', appendYellow);
// $('#yellowContainer').on('click').remove(appendYellow);
// $('#yellowContainer').on('click', '.yellow' , removeYellow);
// function removeYellow(){
//     $(this).remove();
