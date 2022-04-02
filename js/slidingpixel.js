var maxwidth = getWidth();
var maxheight = getHeight()

function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

function getHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}


var square = document.getElementById("square");
var pos_x = 10; //horizontal
var pos_y = 10; //vertical

let hitright = false;
let hittop = false;

function heydarling(){

    alert("Hi darling!! <3")
}


function goright() {
    pos_x += 1
    square.style.left = pos_x + "px";

}

function goleft() {
    pos_x -= 1
    square.style.left = pos_x + "px";

}

function godown() {
    pos_y += 1
    square.style.top = pos_y + "px";

}

function gotop() {
    pos_y -= 1
    square.style.top = pos_y + "px";

}


function gobabygo() {
    if (!hitright) {
        goright();
        if (maxwidth === pos_x) {
            hitright = true;
        }
    }

    if (hitright) {
        goleft();
        if (pos_x === 1) {
            hitright = false;
        }
    }

    if (!hittop) {
        godown();
        if (maxheight === pos_y) {
            hittop = true;
        }
    }

    if (hittop) {
        gotop();
        if (pos_y === 1) {
            hittop = false;
        }
    }
}



setInterval(gobabygo, 26)
