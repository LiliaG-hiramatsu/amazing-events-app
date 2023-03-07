
const contenedorTarjetas = document.getElementById("contenedor")

function renderizarTarjetas(arrayDeEventos) {
    let tarjetas = ''

    for (const evento of arrayDeEventos) {
        tarjetas += `<div class="card carta" style="width: 18rem;">
                    <img src="${evento.image}" class="card-img-top alto-img" alt="">
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
}

renderizarTarjetas(arrayEvents)

const checkboxCategory = document.getElementById("category")

function renderizarCategorias() {
    let categorias = ''

    for (let i = 0; i < array_categories_sin_repetir.length; i++) {
        categorias += `<div class="form-check d-inline-block pe-3">
                        <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        />
                        <label
                        class="form-check-label"
                        for="flexCheckChecked"
                        >
                        ${array_categories_sin_repetir[i]}
                        </label>
                    </div>`
    }
    checkboxCategory.innerHTML = categorias
}

renderizarCategorias()

function filtrarCategorias() {
    let catChecked = []

    checkboxCategory.addEventListener('click', (e) => {
        if (e.target.checked != undefined) {
            if (e.target.checked) {
                catChecked.push(e.target.value)
            } else {
                let index = catChecked.indexOf(e.target.value)
                if (index != -1) {
                    catChecked.splice(index, 1)
                }
            }
        }
        console.log(catChecked)
    });
}

filtrarCategorias()

const buscador = document.getElementById("buscador")

buscador.addEventListener("input", () => {
    const nameSearched = array_names
                        .filter((name) =>
                        name.toLowerCase()
                        .includes(buscador.value.toLowerCase()))
    //console.log(nameSearched)
    const arrayEventsSearched = []
    for (const event of arrayEvents) {
        if (event.name.includes(nameSearched)) {
            arrayEventsSearched.push(event)
        }
    }
    renderizarTarjetas(arrayEventsSearched)
    
    
    //console.log(arrayEventsSearched)
    
})

