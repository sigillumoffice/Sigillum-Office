const scenes = document.querySelectorAll(".scene");

let current = 0;

function showScene(index) {
  scenes.forEach((scene, i) => {
    scene.classList.toggle("active", i === index);
  });
}

showScene(0);

const timings = [2000, 4000, 4000, 3000];

function nextScene() {
  if (current < scenes.length - 1) {
    current++;
    showScene(current);

    if (current < scenes.length - 1) {
      setTimeout(nextScene, timings[current]);
    }
  }
}

setTimeout(nextScene, timings[0]);
