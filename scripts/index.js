const contenedorTarjetas = document.getElementById("contenedor")

const listaEventosFiltradosPorNombre = []

function renderizarTarjetas(arrayDeEventos) {
    contenedorTarjetas.innerHTML = ''
    let tarjetas = ''

    if (arrayDeEventos.length == 0) {
        tarjetas = `<h3>Event not found. Please, try again.</h3>
                    <img src="../assets/images/event_not_found.png" style="width: 50%">`
    }

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

// Filtrar las categorias repetidas
let array_categories_sin_repetir = []
array_categories_sin_repetir = array_categories.filter((valor, indice) => {
    return array_categories.indexOf(valor) === indice
})

function renderizarCategorias() {
    let categorias = ''

    for (let i = 0; i < array_categories_sin_repetir.length; i++) {
        categorias += `<div class="form-check d-inline-block pe-3">
                        <input
                        class="form-check-input"
                        type="checkbox"
                        value="${array_categories_sin_repetir[i]}"
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

checkboxCategory.addEventListener("change", () => {
    let eventosFiltradosPorCategoria = filtrarEventosPorCategoria(arrayEvents)
    //renderizarTarjetas(eventosFiltradosPorCategoria)
})

function filtrarEventosPorCategoria(arrayEventos) {
    let catChecked = []
    for (let i = 0; i < array_categories_sin_repetir.length; i++) {
        if (array_categories_sin_repetir[i].checked) {
            console.log("entra")
            catChecked.push(array_categories_sin_repetir[i].value)
            // Hay que capturar las categorias chequeadas y meterlas en el array catChecked
            //console.log(catChecked)
            // Hay que crear un array con los eventos que tengan la categoria chequeada

            //renderizarTarjetas(arrayEvents)
        }
    }
}

// console.log(Array.isArray(arrayEvents))  true

const buscador = document.getElementById("buscador")
buscador.addEventListener("input", () => {
    let arrayFiltrado = filtrarEventos(arrayEvents, buscador.value)
    renderizarTarjetas(arrayFiltrado)
})

function filtrarEventos(arrayEventos, texto) {
    let arrayEventosFiltrados = arrayEventos.filter((evento) => evento.name.toLowerCase().includes(texto.toLowerCase()))
    return arrayEventosFiltrados
}





/*
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
*/
