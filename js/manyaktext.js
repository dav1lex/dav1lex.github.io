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

var texts = ["example1", "example2", "example3"];
var count = 0;
function changeText() {
    $("#manyak").text(texts[count]);
    count < 3 ? count++ : count = 0;
}
setInterval(changeText, 500);