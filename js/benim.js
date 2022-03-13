const target = document.getElementById('phone');
const btn = document.getElementById('button');
btn.onclick = function showorno() {

    if (target.style.visibility == "hidden") {
        target.style.visibility = "visible";
    } else {
        target.style.visibility = "hidden";
    }
}

