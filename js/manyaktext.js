
var texts1 = ["Merhaba!", "Hello!", "DzieńDobry!", "Hallo!"];
var count = 0;
var eldz = document.getElementById('manyak');
function changeText() {

    $("#manyak").text(texts1[count]);
    count < 4 ? count++ : count = 0;
}
setInterval(changeText, 1800);
