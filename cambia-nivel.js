function subeNivel() {
  nivelActual++;
}

function actualizaNivel() {
  var nivelTexto = nivelActual + 1;
  if (nivelTexto < 30) {
    nivelTexto = "0" + nivelTexto;
  }
  document.querySelector("#nivel").innerText = nivelTexto;
}

function cargaNuevoNivel() {
  subeNivel();
  actualizaNivel();
  iniciar();
}
