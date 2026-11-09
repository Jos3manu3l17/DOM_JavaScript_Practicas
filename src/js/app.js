
const contenedor = document.getElementById("contenedor");

contenedor.innerHTML = `

    <form id="formularioProducto" class="formulario">

        <h1>Registro de productos</h1>

        <br><br>

        <label for="nombre" class="nombre">Nombre del cliente</label>
        <input type="text" id="nombre" class="input-nombre" required>

        <br><br>

        <label for="producto" class="nombre">Nombre del producto</label>
        <input type="text" id="producto" class="input-nombre" required>

        <br><br>

        <label for="precio" class="nombre">Precio del producto</label>
        <input type="number" id="precio" class="input-nombre"
        min="0.01" step="0.01" required>

        <br><br>

        <button type="submit">Registrar producto</button>

    </form>

    <h2 class="resultado">Resultado</h2>

    <p id="resultado" class="resultado">
        Aqui aparece la informacion del producto
    </p>
`;

const formulario = document.getElementById("formularioProducto");
const nombre = document.getElementById("nombre");
const producto = document.getElementById("producto");
const precio = document.getElementById("precio");

const resultado = document.getElementById("resultado");
const listaProductos = document.getElementById("listaProductos");


function obtenerProductos() {

    const productosGuardados = localStorage.getItem("productos");

    return JSON.parse(productosGuardados) || [];

}


function guardarProductos(productos) {

    localStorage.setItem("productos", JSON.stringify(productos));

}


formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nombreCliente = nombre.value;
    const nombreProducto = producto.value;
    const precioProducto = Number(precio.value);

    const nuevoProducto = {
        cliente: nombreCliente,
        producto: nombreProducto,
        precio: precioProducto
    };

    const productos = obtenerProductos();

    productos.push(nuevoProducto);

    guardarProductos(productos);

    resultado.textContent = "Producto registrado correctamente";

    formulario.reset();

});