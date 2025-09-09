document.getElementById("calcular").addEventListener("click", () => {
  const number1 = Number(document.getElementById("number1").value);
  const number2 = Number(document.getElementById("number2").value);
  const number3 = Number(100);

  let result = (number2 / number1) * number3;

  const score = document.getElementById("scoreContainer");
  score.textContent = result;
});
