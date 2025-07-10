let bubble = document.querySelectorAll(".bubble");
let pnlbtm = document.querySelector(".panelbottom");

let hitbubble = document.querySelector(".hitbubble");
let hit;
let timerbubble = document.querySelector(".timerbubble");
timerbubble.textContent = timerbubble.innerText;
let score = document.querySelector(".scorebubble");

let s = 0;
let time = 60;
// All Functions to build this game
function newhit() {
    hit = Math.floor(Math.random() * 40 + 1);
    hitbubble.innerHTML = hit;
    hitcount = hitbubble.innerHTML;
}
function makebubble() {
    let clutter = "";
    for (let i = 0; i <= 190; i++) {
        let random = Math.floor(Math.random() * 50 + 1);
        clutter += `<div class="bubble">${random}</div>`;
    }

    pnlbtm.innerHTML = clutter;
}
function scoreupdate() {
    s = s + 10;
    score.textContent = s;
}
function timer() {
    let timer = setInterval(function () {
        if (time > 0) {
            time = time - 1;
            timerbubble.textContent = time;
        } else {
            clearInterval(timer);
            alert(`Your Score is ${s}`);
        }
    }, 1000);
}
newhit();
makebubble();
pnlbtm.addEventListener("click", (dets) => {
    let bnumber = Number(dets.target.textContent);
    if (hit === bnumber) {
        newhit();
        makebubble();
        scoreupdate();
    }
});
newhit();
timer();
