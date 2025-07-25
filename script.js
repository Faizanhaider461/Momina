let music = document.getElementById("bg-music");
let typewriter = document.getElementById("typewriter");
let treatMsg = document.getElementById("treat-message");
let novelsVisible = false;
let novelList = document.getElementById("novel-list");

function playMusic() {
  music.play();
}

let message = "Wishing you a day filled with laughter, magic, and sweet memories. You're truly one of a kind. 💖 May your journey ahead be filled with love, light, and long-lasting success (Ameen).";
let index = 0;
let typing;

function startTypewriter() {
  clearInterval(typing);
  typewriter.textContent = "";
  index = 0;
  typing = setInterval(() => {
    typewriter.textContent += message.charAt(index);
    index++;
    if (index > message.length) {
      clearInterval(typing);
    }
  }, 50);
}

function toggleNovels() {
  novelsVisible = !novelsVisible;
  novelList.style.display = novelsVisible ? "block" : "none";
  treatMsg.textContent = "";
}

function showTreatMessage(novel) {
  treatMsg.textContent = `🎁 "${novel}" tabhi milega jab treat dogi, warna novel bhi naraz ho jaye ga 😜`;
}


function createSprinkles() {
  const container = document.getElementById('sprinkles-container');
  const colors = ['#f39c12', '#e74c3c', '#9b59b6', '#2ecc71', '#3498db'];

  for (let i = 0; i < 100; i++) {
    const sprinkle = document.createElement('div');
    sprinkle.className = 'sprinkle';
    sprinkle.style.left = `${Math.random() * 100}vw`;
    sprinkle.style.top = `${-Math.random() * 100}vh`;
    sprinkle.style.animationDuration = `${3 + Math.random() * 3}s`;
    sprinkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    sprinkle.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(sprinkle);
  }
}

createSprinkles();
