const labelCategoria = document.getElementById('category')

const contenedorTarjetas = document.getElementById('contenedor')

let tarjetas = ''

for (const evento of eventos.events) {
    tarjetas += `<div class="card carta" style="width: 18rem;">
                    <img src="${evento.image}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${evento.name}</h5>
                        <p class="card-text">${evento.description}</p>
                    </div>
                    <div class="card-body">
                        <span class="price">Price: $${evento.price}</span>
                        <a class="card-link btn btn-outline-primary" href="./details.html" role="button">See more</a>
                    </div>
                </div>`
}

contenedorTarjetas.innerHTML = tarjetas