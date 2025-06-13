function resolver() {
  const problema = document.getElementById("problema").value;
  let resultado = '';
  try {
    resultado = math.evaluate(problema);
    document.getElementById("resultado").innerHTML = `<b>Resultado:</b> ${resultado}`;
    agregarAlHistorial(problema, resultado);
  } catch (e) {
    document.getElementById("resultado").innerHTML = `<span style="color:red;">Error: ${e.message}</span>`;
  }
}

function agregarAlHistorial(entrada, salida) {
  const li = document.createElement("li");
  li.textContent = `${entrada} → ${salida}`;
  document.getElementById("listaHistorial").appendChild(li);
}
