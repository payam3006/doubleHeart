const q = console.log;

let i = 0;

function like(ev) {
  const heart = document.createElement("i");
  i += 1;
  document.querySelector("h3").innerText = `You liked it ${i} times`;
  heart.id = `heart${i}`;
  heart.classList.add("fa");
  heart.classList.add("fa-heart");
  heart.classList.add("heart");
  heart.style = `color:red; top:${ev.offsetY}px; left:${ev.offsetX}px;`;
  document.getElementById("img").appendChild(heart);
  setTimeout(function () {
    document.getElementById(`heart${i}`).classList.add("heart2");
    document.getElementById(`heart${i}`).style = `color:red; top:${
      ev.offsetY - 75
    }px; left:${ev.offsetX - 75}px;`;
  }, 1);
  setTimeout(function () {
    document.getElementById("img").removeChild(heart);
  }, 1001);
  q(ev.offsetX, ev.offsetY);
}
