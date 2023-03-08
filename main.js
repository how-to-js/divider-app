const body = document.querySelector("body"),
  numerator = document.querySelector("#numerator"),
  denominator = document.querySelector("#denominator"),
  equals = document.querySelector("#equals"),
  result = document.querySelector("#result");

function divide() {
  const numeratorValue = parseFloat(numerator.value),
    denominatorValue = parseFloat(denominator.value);

  const resultValue = numeratorValue / denominatorValue;

  result.innerHTML = parseFloat(resultValue.toPrecision(4)).toString();
}

body.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    divide();
  }
});

equals.addEventListener("click", divide);
