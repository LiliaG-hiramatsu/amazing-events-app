const categorySelected = []
const nameSearched = []

const contenedorTarjetas = document.getElementById('contenedor')

function renderizarTarjetas(categorySelected, nameSearched) {
    
    let tarjetas = ''

    for (const evento of eventos.events) {
        if (categorySelected.length != 0) {
            if (nameSearched.length != 0) {
                console.log("Cards with category selected and name filtered")
            } else {
                console.log("Cards with category selected only")
            }
        } 
        else if (nameSearched.length != 0) {
            console.log("Cards with name filtered only")
        }
        else {
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
    }

    contenedorTarjetas.innerHTML = tarjetas
}

renderizarTarjetas(categorySelected, nameSearched)

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
    checkboxCategory.addEventListener('click', function() {
        //console.log("categoria chequeada")
        categorySelected.push()
        //console.log(categorySelected)
    });
    //return categorySelected
}
filtrarCategorias()

const buscador = document.getElementById("buscador")

function inputSearch() {

    let array_names = []
    for (const event of arrayEvents) {
        array_names.push(event.name)
    }
    //console.log(array_names)
    buscador.addEventListener("change", () => {
        nameSearched = array_names
            .filter((name) =>
            name.toLowerCase()
            .includes(buscador.value.toLocaleLowerCase()))
            //return nameSearched
            console.log(nameSearched)
    })
}

inputSearch()
