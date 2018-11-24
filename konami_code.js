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

let i = 0;

function init() {
  document.body.addEventListener('keydown', function(event) {
    const keyName = event.key;
    if (keyName === codes[i]){
      i++;
      if (i === codes.length){
        alert('Congratulations!');
        i = 0;
      }
    } else {
      i = 0;
    }
  });
};
