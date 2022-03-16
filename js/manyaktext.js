var texts1 = ["Merhaba!", "Hello!", "Dzień Dobry!", "Здрастуйте", "Hallo!", "こんにちは","你好", "नमस्ते"];
var count = 0;
var eldz = document.getElementById('manyak');

function changeText() {

    $("#manyak").text(texts1[count]);
    count < 8 ? count++ : count = 0;
}

setInterval(changeText, 1500);
