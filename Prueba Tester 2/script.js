var numberToGuess = Math.floor(Math.random() * 100) + 1;
var attempts = 0;

function checkGuess() {
  var guessInput = document.getElementById("guessInput");
  var guess = parseInt(guessInput.value);

  if (isNaN(guess)) {
    alert("Ingresa un número entero válido.");
    return;
  }

  attempts++;

  if (guess > numberToGuess) {
    showMessage("Incorrecto! El número es menor.", "black");
  } else if (guess < numberToGuess) {
    showMessage("Incorrecto! El número es mayor.", "black");
  } else {
    showMessage("Felicitaciones! Adivinaste el número!", "green");
    disableInput();
  }

  guessInput.value = "";

  if (attempts === 10) {
    showMessage("¡Pérdiste!", "red");
    disableInput();
  }
}

function showMessage(message, color) {
  var messageElement = document.getElementById("message");
  messageElement.innerHTML = message;
  messageElement.style.color = color;
}

function disableInput() {
  var guessInput = document.getElementById("guessInput");
  guessInput.disabled = true;
}
