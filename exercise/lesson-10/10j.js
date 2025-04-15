let calculation = localStorage.getItem("calculation") || "";
document.querySelector("p").innerHTML = calculation;
function updateCalculation(value) {
  calculation += value;
  //console.log(calculation);
  document.querySelector("p").innerHTML = calculation;
  localStorage.setItem("calculation", calculation);
}
