// •	Una vez cargada la página, es decir cuando window sea “load”. Cargar los siguientes eventos:
// o	Click en el botón submit (guardar)
// o	Click en el botón verDiscos.

window.addEventListener("load", iniciar);
function iniciar() {
  document.getElementById("guardar").addEventListener("click", guardar);
  document
    .getElementById("verDiscos")
    .addEventListener("click", verTodosDiscos);
}

/*   •	Crear un array vacío que va guardar los datos que se introduzcan en el formulario. */
var discoteca = [];

/*     •	Crear un objeto con las siguientes características:
        o	Para crear el objeto será necesario pasar los datos recibidos en el formulario.
        o	Tendrá un atributo por cada uno de los datos del formulario.
        o	Tendrá una función verDatos, que retorne una cadena con la siguiente estructura:
        “El disco Beatles es de The White Album se grabó en 1968, es de tipo Pop. Está guardado en la estantería: 2 y en estos momentos se encuentra Prestado */

function Disco(nombre, grupo, anno, tipoMusica, localizacion, prestado) {
  this.nombre = nombre;
  this.grupo = grupo;
  this.anno = anno;
  this.tipoMusica = tipoMusica;
  this.localizacion = localizacion;
  this.prestado = prestado;
  this.verDatos = function () {
    return (
      "El disco " +
      this.nombre +
      " es de " +
      this.grupo +
      " se grabó en " +
      this.anno +
      ", es de tipo " +
      this.tipoMusica +
      ". Está guardado en la estantería: " +
      this.localizacion +
      " y en estos momentos se encuentra " +
      (this.prestado ? "Prestado" : "Disponible")
    );
  };
}

function guardar() {
  miformulario = document.getElementById("miformulario");

  if (miformulario.checkValidity()) {
    let nombre = miformulario.nombre.value;
    let grupo = miformulario.grupo.value;
    let anno = miformulario.anno.value;
    let tipoMusica = miformulario.tipoMusica.value;
    let localizacion = miformulario.localizacion.value;
    let prestado = miformulario.prestado.value;
    let nuevodisco = new Disco(
      nombre,
      grupo,
      anno,
      tipoMusica,
      localizacion,
      prestado
    );
    discoteca.push(nuevodisco);
    document.getElementById("miformulario").reset();
  }

  event.preventDefault;
}

function verTodosDiscos() {
  console.log("datos:" + discoteca.length);
  for (i = 0; i < discoteca.length; i++) {
    console.log(discoteca[i].verDatos());
  }
}
