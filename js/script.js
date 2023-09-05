function calcularValores() {
  let valor1 = parseFloat(document.getElementById("txtValor1").value);
  let valor2 = parseFloat(document.getElementById("txtValor2").value);
  let operacao = document.getElementById("cbxOperacao").value;

  switch (operacao) {
    case "+":
      console.log("Adição");
      document.getElementById("txtResultado").innerHTML = valor1 + valor2;
      break;
    case "-":
      console.log("Subtração");
      document.getElementById("txtResultado").innerHTML = valor1 - valor2;
      break;

    case "*":
      console.log("Multiplicação");
      document.getElementById("txtResultado").innerHTML = valor1 * valor2;

      break;
    case "/":
      console.log("Divisão");
      document.getElementById("txtResultado").innerHTML = valor1 / valor2;

      break;
    default:
      console.log("Operação inválida");
  }

  console.log("A vl1 é " + valor1);
  console.log("A vl2 é " + valor2);
  console.log("A OP é " + operacao);
}
