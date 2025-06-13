function resolver() {
  const problema = document.getElementById("problema").value;
  let resultado = '';
  try {
    resultado = math.evaluate(problema);
    // Muestra el resultado en LaTeX usando MathJax
    const resultadoHTML = `<b>Resultado:</b> \\(${math.parse(String(resultado)).toTex()}\\)`;
    document.getElementById("resultado").innerHTML = resultadoHTML;
    MathJax.typeset(); // Re-renderiza MathJax
    agregarAlHistorial(problema, resultadoHTML);
  } catch (e) {
    document.getElementById("resultado").innerHTML = `<span style="color:red;">Error: ${e.message}</span>`;
  }
}

function agregarAlHistorial(entrada, salidaHTML) {
  const li = document.createElement("li");
  li.innerHTML = `${entrada} → ${salidaHTML}`;
  document.getElementById("listaHistorial").appendChild(li);
  MathJax.typeset(); // Vuelve a renderizar todo
}
