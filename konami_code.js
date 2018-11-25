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

let index = 0;

function init() {
  document.body.addEventListener('keydown', function(e) {
     let key = e.key;
     if (key === codes[index]) {
       index++;
       if (index === codes.length) {
         alert("Yay");
       }
     } else {
       index = 0;
     }
  })
}

// attach an event listener to document.body
// check for 'keydown' events
// If the user enters this special code,
// pressing all ten of the keys in the correct order
// alert() a congratulatory message
// if they press a key out of sequence or a key that isn't part of the Konami code,
// don't alert() anything and simply keep listening for all ten keydowns in the correct order.
//When you're testing the code out in the browser, be sure to call init() to attach the event listener and set everything up!
