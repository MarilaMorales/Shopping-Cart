// Función para actualizar los contadores en la interfaz
function actualizarContadores() {
    let contadores = JSON.parse(localStorage.getItem("contadores"));
    document.getElementById("contador-moto").innerText = contadores.moto;
    document.getElementById("contador-carro").innerText = contadores.carro;
    document.getElementById("contador-nave").innerText = contadores.nave;
    document.getElementById("contador-casa").innerText = contadores.casa;
}

function mostrarCarrito() {
    const contadores = JSON.parse(localStorage.getItem("contadores"));
    const itemList = document.getElementById("itemList");
    const totalAmount = document.getElementById("totalAmount");

    // Limpiar la lista
    itemList.innerHTML = "";

    for (let item in contadores) {
        if (contadores[item] > 0) {
            const listItem = document.createElement("li");
            listItem.textContent = item + ": " + contadores[item] + " x $" + precios[item] + " = $" + (contadores[item] * precios[item]);
            itemList.appendChild(listItem);
        }
    }

    // Calcular y mostrar el total
    const total = calcularTotal();
    totalAmount.textContent = "Total: $" + total;
}

// Llama a la función para mostrar el carrito al cargar la página
mostrarCarrito();