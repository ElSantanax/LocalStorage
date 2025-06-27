// Extraer datos de local storage
const nombres = localStorage.getItem('nombre');
console.log(nombres);

const meses = localStorage.getItem('meses');
const mesesString = JSON.parse(meses);
console.log(mesesString);

const producto = localStorage.getItem('producto');
const productoString = JSON.parse(producto);
console.log(productoString);
