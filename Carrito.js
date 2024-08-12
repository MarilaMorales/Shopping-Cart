let precios = { moto: 20000, carro: 120000, casa: 60000,nave: 200000 };

// Llama desde DOM, y asigna al mismo tiempo el evento click comprar
document.getElementById("btnMoto").addEventListener("click", function() {comprar("moto");});
document.getElementById("btnCarro").addEventListener("click", function() {comprar("carro");});
document.getElementById("btnCasa").addEventListener("click", function() {comprar("casa");});
document.getElementById("btnNave").addEventListener("click", function() {comprar("nave");});

// Verifica si los contadores existen en el almacenamiento local, si no, inicialízalos
if (!localStorage.getItem("contadores")) {
    let contadores = { 
        moto: 0,
        carro: 0,
        nave: 0,
        casa: 0
    };
    localStorage.setItem("contadores", JSON.stringify(contadores));
}

// Función para manejar la compra de un item
function comprar(producto) {
    let contadores = JSON.parse(localStorage.getItem("contadores"));

    if (contadores[producto]) {
        contadores[producto] += 1;
    } else {
        contadores[producto] = 1;
    }

    localStorage.setItem("contadores", JSON.stringify(contadores));
    actualizarContadores();
}

// Actualiza los contadores
function actualizarContadores() {
    let contadores = JSON.parse(localStorage.getItem("contadores"));
    document.getElementById("contador-moto").innerText = contadores.moto;
    document.getElementById("contador-carro").innerText = contadores.carro;
    document.getElementById("contador-nave").innerText = contadores.nave;
    document.getElementById("contador-casa").innerText = contadores.casa;
}

// Llama a la función para que se muestren los contadores al cargar la página
actualizarContadores();
