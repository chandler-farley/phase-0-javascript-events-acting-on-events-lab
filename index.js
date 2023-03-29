// Your code here
const dodger = document.getElementById("dodger");
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
});
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
  }
}
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 400) {
        dodger.style.left = `${left + 1}px`;
    }
}

// document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowUp") {
//       moveDodgerUp();
//     }
// });
// function moveDodgerUp() {
//     const bottomNumbers = dodger.style.bottom.replace("px", "");
//     const bottom = parseInt(bottomNumbers, 10);

//     if (bottom < 400) {
//         dodger.style.bottom = `${bottom + 1}px`;
//     }
// }
// document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowDown") {
//       moveDodgerDown();
//     }
// });
// function moveDodgerDown() {
//     const bottomNumbers = dodger.style.bottom.replace("px", "");
//     const bottom = parseInt(bottomNumbers, 10);

//     if (bottom > 0) {
//         dodger.style.bottom = `${bottom - 1}px`;
//     }
// }