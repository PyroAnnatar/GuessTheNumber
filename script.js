"use strict";

// let secretNumber = Math.trunc(Math.random() * 20 + 1);
let secretNumber;
secretNumberGen();
let score = 20;
let highscore = 0;
state("default");

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}
function secretNumberGen() {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  return secretNumber;
}

function state(a) {
  if (a === "win") {
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
  if (a === "default")
    document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
}

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct number!";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   console.log(guess);

  // When there's no input
  if (!guess) {
    // document.querySelector(".message").textContent = "🛑 No number!";
    displayMessage("🛑 No number!");

    // Win scenario
  } else if (guess === secretNumber) {
    displayMessage("🎇 Correct number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".sarcasm").style.display = "block";
    state("win");
  }
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //   document.querySelector(".message").textContent = "😿 You lost";
      displayMessage("😿 You lost");

      document.querySelector(".score").textContent = 0;
    }
  }
});

//     // Too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📈 Too high!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "😿 You lost";
//       document.querySelector(".score").textContent = 0;
//     }

//     // Too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📉 Too low!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "😿 You lost";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

// if (guess!==secretNumber){
//     document.querySelector(".score").textContent = Number(20--)
// }

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumberGen();

  //   document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  state("default");
  document.querySelector(".sarcasm").style.display = "none";
});
