const divProductos = document.getElementById("divProductos");
const alertError = document.getElementById("alertError");
const URLMain = "https://fakestoreapi.com/products/";

function getData() {
    fetch(URLMain)
        .then((response) => {
            console.log(response);
            return response.json();  // Necesitamos devolver el JSON
        })
        .then((res) => {
            createCards(res);  // Pasar los datos a createCards
        })
        .catch((err) => {
            alertError.innerText = `Problema al traer la información: ${err}`;
            alertError.style.display = "block";
        });
}

function createCards(products) {
    // Limpiar divProductos en caso de que haya contenido previo
    divProductos.innerHTML = "";

    // Iterar sobre cada producto recibido
    products.forEach((product) => {
        // Crear un div para cada tarjeta
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("col-md-3", "mb-4");

        const card = document.createElement("div");
        card.classList.add("card");  // Añadir clase para estilizar

        // Insertar el contenido dentro de la tarjeta
        card.innerHTML = `
            
            <img src="${product.image}" alt="${product.title}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-price">$${product.price}</p>
            </div>

        `;

        // Insertar la tarjeta en el contenedor y cardContainer divProductos
        cardContainer.appendChild(card);
        divProductos.appendChild(card);

    });
}

getData();
