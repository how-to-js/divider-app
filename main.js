const numerator = document.querySelector("#numerator"),
  denominator = document.querySelector("#denominator"),
  equals = document.querySelector("#equals"),
  result = document.querySelector("#result");

equals.addEventListener("click", () => {
  const numeratorValue = parseFloat(numerator.value),
    denominatorValue = parseFloat(denominator.value);

  const resultValue = numeratorValue / denominatorValue;

  result.innerHTML = resultValue;
});
