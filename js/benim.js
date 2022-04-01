const target = document.getElementById('phone');
const btn = document.getElementById('button');
btn.onclick = function showorno() {

    if (target.style.visibility === "hidden") {
        target.style.visibility = "visible";
        btn.innerHTML = "Hide phone number"
    } else {
        target.style.visibility = "hidden";
        btn.innerHTML = "Show phone number"
    }
}
