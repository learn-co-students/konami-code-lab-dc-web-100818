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

const body = document.body

let index = 0

function init() {
  body.addEventListener("keydown", function(e) {
    const key = e.key;

    if (e.key === codes[index]) {
      index++;

      if (index === codes.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
