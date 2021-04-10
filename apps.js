var form = document.getElementById("formulario");
var n1 = document.getElementById("numero1");
var n2 = document.getElementById("numero2");
let circunferencia;
form.addEventListener("submit", function (e) {
  var raio = n1.value / 2;
  circunferencia = 2 * Math.PI * raio;
  //const valor = n1.value + 2 * Math.PI * raio;
});

var resultado = document.querySelector("#resposta");
resultado.innerHTML = "resultado é " + circunferencia;
