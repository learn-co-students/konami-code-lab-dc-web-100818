const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let stroke = 0

  document.body.addEventListener("keydown", (e) => {
    const key = e.key

    stroke = (codes[stroke] === key) ? ++stroke : 0


    if (stroke === codes.length) {
      window.alert("You got it!");
      idx = 0
    }

  });
}

