let timer = 60;
let hitvalue = "";
let score = 0;

function bubble() {
  let bubble = "";

  for (let i = 1; i < 177; i++) {
    let num = Math.floor(Math.random() * 10);
    bubble += `<div class="bubble">${num}</div>`;
  }

  document.querySelector("#pbottom").innerHTML = bubble;
}

function bab() {
  let drone = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#counttime").textContent = timer;
    } else {
      clearInterval(drone);
      document.querySelector("#pbottom").innerHTML = `<h1>GAME OVER
      <div>Your Score - ${score}</div></h1> `;
    }
  }, 1000);
}

function newhit() {
  hitvalue = Math.floor(Math.random() * 10);
  document.querySelector("#hitvalue").innerHTML = hitvalue;
}

function newscore() {
  score += 10;
  document.querySelector("#scorevalue").textContent = score;
}

document.querySelector("#pbottom").addEventListener("click", function (touch) {
  let clickednum = Number(touch.target.textContent);
  if (clickednum === hitvalue) {
    newscore();
    bubble();
    newhit();
  }
});

newhit();
bab();
bubble();
