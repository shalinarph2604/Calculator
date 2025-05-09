const resultInput = document.getElementById("result");
let currentInput = "";

// memasukkan value ke input 
function appendValue(value) {
  currentInput += value;
  resultInput.value = currentInput;
}

// untuk clear input
function clearInput() {
  currentInput = "";
  resultInput.value = "";
}

// mengkalkulasi hasil
function calculateResult() {
  try {
    currentInput = eval(currentInput).toString(); // Evaluate the input string
    resultInput.value = currentInput;
  } catch (error) {
    resultInput.value = "Error"; // Handle invalid inputs
    currentInput = "";
  }
}

// event listener buat button
document.querySelectorAll(".calculator button").forEach((button) => {
  const value = button.getAttribute("data-value");
  if (value) {
    button.addEventListener("click", () => appendValue(value));
  }
});

document.getElementById("clear").addEventListener("click", clearInput);
document.getElementById("equals").addEventListener("click", calculateResult);