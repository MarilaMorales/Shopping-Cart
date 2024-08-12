let precios = {
    moto: 20000,
    carro: 120000,
    casa: 60000,
    nave: 200000
};

// Función para calcular el total de la compra
function calcularTotal() {
    let contadores = JSON.parse(localStorage.getItem("contadores"));
    let total = 0;

    for (let item in contadores) {
        if (contadores[item] > 0) {
            total += contadores[item] * precios[item];
        }
    }

    return total;
}

// Función para actualizar la vista del carrito
function mostrarCarrito() {
    let contadores = JSON.parse(localStorage.getItem("contadores"));
    let listaProd = document.getElementById("listaProd");
    let precioTotal = document.getElementById("precioTotal");

    // Limpiar la lista
    listaProd.innerHTML = "";

    for (let item in contadores) {
        if (contadores[item] > 0) {
            let listItem = document.createElement("li");
            listItem.textContent = item + ": " + contadores[item] + " x $" + precios[item] + " = $" + (contadores[item] * precios[item]);

            // Crear el botón de eliminar
            let btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.onclick = function() {
                eliminarItem(item);
            };

            // Agregar el botón de eliminar a la lista de artículos
            listItem.appendChild(btnEliminar);
            listaProd.appendChild(listItem);
        }
    }

    // Calcular y mostrar el total
    let total = calcularTotal();
    precioTotal.textContent = "Total: $" + total;
}

// Función para eliminar un artículo
function eliminarItem(item) {
    let contadores = JSON.parse(localStorage.getItem("contadores"));

    if (contadores[item] > 0) {
        contadores[item] = 0;  // Eliminar todos los artículos de este tipo
    }

    localStorage.setItem("contadores", JSON.stringify(contadores));
    mostrarCarrito();  
}

// Llama a la función para mostrar el carrito al cargar la página
mostrarCarrito();

