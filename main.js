const body = document.querySelector("body"),
  numerator = document.querySelector("#numerator"),
  denominator = document.querySelector("#denominator"),
  equals = document.querySelector("#equals"),
  result = document.querySelector("#result");

function divide() {
  const numeratorValue = parseFloat(numerator.value),
    denominatorValue = parseFloat(denominator.value);

  let errors = [];

  if (isNaN(numeratorValue)) {
    errors.push("numerator");
  }

  if (isNaN(denominatorValue)) {
    errors.push("denominator");
  }

  if (errors.length === 0) {
    const resultValue = numeratorValue / denominatorValue;

    result.innerHTML = parseFloat(resultValue.toPrecision(4)).toString();
  } else {
    result.innerHTML = `Cannot parse ${errors.join(" and ")} as number.`;
  }
}

body.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    divide();
  }
});

equals.addEventListener("click", divide);
