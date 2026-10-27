const formulario = document.getElementById("formularioProducto");
const nombre = document.getElementById("nombre");
const producto = document.getElementById("producto");
const precio = document.getElementById("precio");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombreCliente = nombre.value;
    const nombreProducto = producto.value;
    const precioProducto = Number(precio.value);

    resultado.textContent = 
    "Cliente: " + nombreCliente +
    " | Producto: " + nombreProducto +
    " | Precio: $" + precioProducto.toLocaleString("es-CO");

    console.log("Producto registrado correctamente");
    
});




