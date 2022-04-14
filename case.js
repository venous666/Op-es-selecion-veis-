const verificarproduto = function (opcao) {
  let resultado = "<br> <h3>Opção selecionada</h3>";
  switch (opcao) {
    case "pc1":
      resultado += "pao com ovo custa r$15,00";
      console.log(" pao com ovo custa r$15,00");
      break;
    case "pc2":
      resultado += "pao com queijo custa R$18,00";
      console.log("pao com queijo custa R$18,00");
      break;
    case "pc3":
      resultado += "pao com manteiga custa R$16,00";
      console.log("pao com manteiga custa R$16,00");
      break;
    default:
      resultado = "opcao invalida";
      console.log("opção inválida");
      break;
  }
  document.getElementById("resultado").innerHTML = resultado;
}
