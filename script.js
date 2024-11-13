let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
  const inputElement = document.getElementById("guess");
  const feedbackElement = document.getElementById("feedback");
  while (attempts > 0) {
    attempts--;
    const guess = inputElement.value;
    if (randomNumber == guess) {
      attempts = 0;
      feedbackElement.innerHTML = "Congratulations!";
      feedbackElement.style.color = "green";
      break;
    } else if (guess < randomNumber) {
      feedbackElement.innerHTML =
        "Too low! Try again. You have " + attempts + " attempts left";
      feedbackElement.style.color = "red";
      break;
    } else {
      feedbackElement.innerHTML =
        "Too high! Try again. You have " + attempts + " attempts left";
      feedbackElement.style.color = "red";
      break;
    }
  }
  if (attempts === 0 && inputElement.value != randomNumber) {
    feedbackElement.innerHTML =
      "Game Over! The correct answer was " + randomNumber;
    feedbackElement.style.color = "red";
  }
}
