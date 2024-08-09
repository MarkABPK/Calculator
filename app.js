let numOneError = document.getElementById("num1Error");
let numTwoError = document.getElementById("num2Error");
let result = document.getElementById("result");
let operatorError = document.getElementById("operatorError");
let btn = document.getElementById("btn-calculate");
let numOneSatus,
  numTwoStatus,
  operatorStatus = false;
let finalRresult;
numOneError.style.display = "none";
numTwoError.style.display = "none";
operatorError.style.display = "none";

btn.addEventListener("click", function () {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let operator = document.getElementById("operator");

  checkValidate(num1, num2, operator);

  if (!numOneSatus && !numTwoStatus && !operatorStatus) {
    num1 = parseInt(num1.value);
    num2 = parseInt(num2.value);
    switch (operator.value) {
      case "add":
        finalRresult = num1 + num2;
        break;
      case "substract":
        finalRresult = num1 - num2;
        break;
      case "multiply":
        finalRresult = num1 * num2;
        break;
      case "divide":
        finalRresult = num1 / num2;
        break;
    }
    result.innerHTML = finalRresult;
  }
});

function checkValidate(num1, num2, operator) {
  if (num1.value == "" || num1.value == null || num1.value == undefined) {
    numOneError.style.display = "block";
    numOneSatus = true;
  } else {
    numOneError.style.display = "none";
    numOneSatus = false;
  }

  if (num2.value == "" || num2.value == null || num2.value == undefined) {
    numTwoError.style.display = "block";
    numTwoStatus = true;
  } else {
    numTwoError.style.display = "none";
    numTwoStatus = false;
  }

  if (operator.value == "empty") {
    operatorError.style.display = "block";
    operatorStatus = true;
    result.innerHTML = "0";
  } else {
    operatorError.style.display = "none";
    operatorStatus = false;
  }
}
