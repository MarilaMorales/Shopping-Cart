

// Función para actualizar los contadores en la interfaz
function actualizarContadores() {
    let contadores = JSON.parse(localStorage.getItem("contadores"));
    document.getElementById("contador-moto").innerText = contadores.moto;
    document.getElementById("contador-carro").innerText = contadores.carro;
    document.getElementById("contador-nave").innerText = contadores.nave;
    document.getElementById("contador-casa").innerText = contadores.casa;
}

function mostrarCarrito() {
    let contadores = JSON.parse(localStorage.getItem("contadores"));
    let itemList = document.getElementById("itemList");
    let precioTotal = document.getElementById("precioTotal");
    
    // Limpiar la lista
    itemList.innerHTML = "";

    for (let item in contadores) {
        if (contadores[item] > 0) {
            let listItem = document.createElement("li");
            listItem.textContent = item + ": " + contadores[item] + " x $" + precios[item] + " = $" + (contadores[item] * precios[item]);
            itemList.appendChild(listItem);
        }
    }

    // Calcular y mostrar el total
    let total = calcularTotal();
    precioTotal.textContent = "Total: $" + total;
}

// Llama a la función para mostrar el carrito al cargar la página
mostrarCarrito();