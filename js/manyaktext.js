// var text = ["Welcome", "Hi", "Sup dude"];
// var counter = 0;
// var elem = document.getElementById("manyak");
// var inst = setInterval(change, 1000);
//
// function change() {
//     elem.innerHTML = text[counter];
//     counter++;
//     if (counter >= text.length) {
//         counter = 0;
//         // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
//     }
// }

var texts1 = ["Merhaba!", "Hello!", "Dzień Dobry!", "Hallo!"];
var count = 0;
var eldz = document.getElementById('manyak');
function changeText() {

    $("#manyak").text(texts1[count]);
    count < 4 ? count++ : count = 0;
}
setInterval(changeText, 1800);