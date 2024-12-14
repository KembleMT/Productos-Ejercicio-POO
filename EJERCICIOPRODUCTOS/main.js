const divProductos = document.getElementById("divProductos");
const alertError = document.getElementById("alertError");
const URLMain="https://fakestoreapi.com/products/";

function getData(){
    fetch (URLMain).then((response) =>{
        console.log(response);
        response.json().then((res)=> {
                createCards(res);
            });

    }).catch((err)=> {
        alertError.innerText=`Problema al traer la información ${err}`;
        alertError.style.display="block";
    });
}


    function createCards(){
    divProductos.insertAdjacentElement("beforeend",res.forEach(product)=>
        `<div class="col-md-3">
                 <img src="${product.image}" alt="${product.title}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-price">$${product.price}</p>
            </div>
        </div>`
    );
}

getData();
