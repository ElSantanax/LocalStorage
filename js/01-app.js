localStorage.setItem('nombre', 'José'); // Tomas una llave y un valor
sessionStorage.setItem('nombre', 'Santana'); // Toma una llave y un valor 

// LocalStorage solo almacena string, no se pueden guardar objetos ni arreglos
const producto = {
    nombre: 'Monitor',
    precio: 200
}

const productoString = JSON.stringify(producto); // Forma de transformalor para string
localStorage.setItem('producto', productoString) // Forma en la que se llama

const meses = ['Enero', 'Febrero', 'Marzo'];
const meseString = JSON.stringify(meses);
localStorage.setItem('meses', meseString);