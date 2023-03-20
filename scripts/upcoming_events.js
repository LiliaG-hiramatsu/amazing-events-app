const API_URL = 'https://mindhub-xj03.onrender.com/api/amazing'

fetch(API_URL)
  .then(res => res.json())
  .then(response => {
    let data = response.events
    let fechaActual = response.currentDate
    const category = categoriasSinRepetir(data)
    renderizarCategorias(category)
    let upcomingEvents = []
    for (const evento of data) {
      if (fechaActual < evento.date) {
        upcomingEvents.push(evento)
      }
    }
    renderizarTarjetas(upcomingEvents)
    filtrarPorCategoria(upcomingEvents)
    filtrarPorBusqueda(upcomingEvents)
  })

const contenedorTarjetas = document.getElementById("contenedor")

let flagCheckbox = false
let flagSearch = false
let arrayEventosPorCategoria = []
let arrayFiltrado = []
let locationActual = window.location

function renderizarTarjetas(arrayDeEventos) {
  let tarjetas = ''
  
  if (arrayDeEventos.length == 0) {
      tarjetas = `<h3>Event not found. Please, try again.</h3>
                  <img src="../assets/images/event_not_found.png" style="width: 50%">`;
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
                        <a class="card-link btn btn-outline-info" href="../details.html?id=${evento._id}&&page=${locationActual.pathname}" role="button">See more</a>
                    </div>
                </div>`
  }
  contenedorTarjetas.innerHTML = tarjetas
}

const checkboxCategory = document.getElementById("category");
function renderizarCategorias(categorias) {
    let categoryEvent = ''
    for (let categoria of categorias) {
    categoryEvent += `<div class="form-check d-inline-block pe-3">
                            <input
                            class="form-check-input"
                            type="checkbox"
                            name="${categoria}"
                            value="${categoria}"
                            id="flexCheckChecked"
                            id="${categoria}"
                            />
                            <label
                            class="form-check-label"
                            for="flexCheckChecked"
                            >
                            ${categoria}
                            </label>
                            </div>`
    }
    checkboxCategory.innerHTML = categoryEvent
}

function categoriasSinRepetir(arrayEventos) {
  const categoryFilter = arrayEventos.map((eventos) => eventos.category);
  const category = categoryFilter.reduce((c, e) => {
    if (!c.includes(e)) {
      c.push(e)
    }
    return c
  }, [])
  return category
}

function filtrarPorCategoria(arrayEvents) {
  let categoryChecked = []
  checkboxCategory.addEventListener("click", (e) => {
    if (e.target.checked) {
      categoryChecked.push(e.target.value)
      flagCheckbox = true
    } else {
      categoryChecked = categoryChecked.filter(
          (noChecked) => noChecked !== e.target.value
      )
      flagCheckbox = false
      //console.log(flagSearch)
      if (flagSearch == true) {
          arrayFiltrado = filtrarEventos(arrayEvents, buscador.value)
          //console.log(arrayFiltrado)
          renderizarTarjetas(arrayFiltrado)
      }
    }
    //console.log(categoryChecked)
    arrayEventosPorCategoria = arrayEvents.filter((c) =>
      categoryChecked.includes(c.category)
    )
    //console.log(arrayEventosPorCategoria)
    if (categoryChecked.length != 0) {
      if (flagSearch == true) {
          arrayFiltrado = filtrarEventos(arrayEventosPorCategoria, buscador.value)
          renderizarTarjetas(arrayFiltrado)
      } else {
          renderizarTarjetas(arrayEventosPorCategoria)
      }
    }
    else if (flagCheckbox == false && flagSearch == false) {
      renderizarTarjetas(arrayEvents)
    }
  })
}

const buscador = document.getElementById("buscador");
function filtrarPorBusqueda(arrayEvents) {
  buscador.addEventListener("input", () => {
    flagSearch = true
    // Verifico si hay un checked para hacer la busqueda en base a esa categoria chequeada.
    if (flagCheckbox == true) {
      arrayFiltrado = filtrarEventos(arrayEventosPorCategoria, buscador.value)
    } else {
      arrayFiltrado = filtrarEventos(arrayEvents, buscador.value);
    }
    renderizarTarjetas(arrayFiltrado)
  })
}

function filtrarEventos(arrayEventos, texto) {
  let arrayEventosFiltrados = arrayEventos.filter((evento) =>
    evento.name.toLowerCase().includes(texto.toLowerCase())
  )
  return arrayEventosFiltrados
}
