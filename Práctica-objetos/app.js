/* (2 puntos) Que tengan dos propiedades: x e y. Servirán para representar las coordenadas del punto.
              La construcción de los puntos usará una función constructora a la que se le pasan dos números.
              Si lo que recibe en cada coordenada no es un número, se coloca a cero. */
function Punto(x, y) {
  this.x = typeof x === "number" ? x : 0;
  this.y = typeof y === "number" ? y : 0;
}

/* (1 punto) Un método llamado cambiar al que le pasamos dos números
                    y nos permite modificar las coordenadas del número*/

Punto.prototype.cambiar = function (x, y) {
  this.x = typeof x === "number" ? x : this.x;
  this.y = typeof y === "number" ? y : this.y;
};

// (1 punto) Un método copia que retorna una copia del objeto.
Punto.prototype.copia = function () {
  return new Punto(this.x, this.y);
};

/* (1 punto) Un método llamado iguales que recibe un segundo punto
                     y nos dice si ambos puntos son iguales. */
Punto.prototype.iguales = function (punto) {
  return this.x === punto.x && this.y === punto.y;
};

/* (1 punto) Un método llamado suma que recibe un segundo punto
                    y devuelve un tercer punto resultado de sumar las coordinadas de los dos anteriores.  */
Punto.prototype.suma = function (punto) {
  return new Punto(this.x + punto.x, this.y + punto.y);
};

/* (1 punto) Un método llamado obtener distancia que también recibe un segundo punto
                    y nos devuelve la distancia entre ambos puntos, para esta operación, se puede utilizar
                    el teorema del Pitágoras: */
Punto.prototype.obtenerDistancia = function (punto) {
  var distanciaX = this.x - punto.x;
  var distanciaY = this.y - punto.y;
  return Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
};
/* (1 punto) Finalmente un método llamado toString que retorna un texto
                    con las coordenadas del punto por ejemplo (-5,2).*/
Punto.prototype.toString = function () {
  return "(" + this.x + "," + this.y + ")";
};

// Comprobar que el código es correcto, llamando a cada uno de los métodos.

// Creamos un objeto Punto con valores 3 y 4
var punto1 = new Punto(3, 4);
console.log("Punto 1:", punto1.toString()); // (3,4)

// Modificamos las coordenadas del objeto Punto con valores 5 y 6
punto1.cambiar(5, 6);
console.log("Punto 1 modificado:", punto1.toString()); // (5,6)

// Creamos una copia del objeto Punto
var punto2 = punto1.copia();
console.log("Punto 2 (copia de Punto 1):", punto2.toString()); // (5,6)

// Comparamos si dos objetos Punto son iguales
var punto3 = new Punto(5, 6);
console.log("Punto 1 y Punto 3 son iguales:", punto1.iguales(punto3)); // true

// Sumamos dos objetos Punto
var punto4 = new Punto(1, 2);
var punto5 = punto3.suma(punto4);
console.log("Punto 5 (suma de Punto 3 y Punto 4):", punto5.toString()); // (6,8)

// Obtenemos la distancia entre dos objetos Punto
var distancia = punto5.obtenerDistancia(punto4);
console.log("Distancia entre Punto 5 y Punto 4:", distancia);
