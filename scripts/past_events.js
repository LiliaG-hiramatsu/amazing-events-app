const contenedorTarjetas = document.getElementById('contenedor')
const listaEventosFiltradosPorNombre = []
let flagCheckbox = false
let arrayEventosPorCategoria = []

function renderizarTarjetas(arrayDeEventos) {
  contenedorTarjetas.innerHTML = ''
  let tarjetas = ''
  let fechaActual = eventos.currentDate

  if (arrayDeEventos.length == 0) {
    tarjetas = `<h3>Event not found. Please, try again.</h3>
                <img src="../assets/images/event_not_found.png" style="width: 50%">`;
  }

  for (const evento of arrayDeEventos) {
    if (fechaActual > evento.date) {
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
  }
  contenedorTarjetas.innerHTML = tarjetas
}

renderizarTarjetas(arrayEvents)

const checkboxCategory = document.getElementById("category");
const categoryFilter = arrayEvents.map((eventos) => eventos.category);
const category = categoryFilter.reduce((c, e) => {
  if (!c.includes(e)) {
    c.push(e)
  }
  return c
}, [])

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
renderizarCategorias(category)

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
  }
  //console.log(categoryChecked)
  arrayEventosPorCategoria = arrayEvents.filter((c) =>
    categoryChecked.includes(c.category)
  )
  // Array de eventos que pertenecen a la categoria chequeada
  // console.log(arrayEventosPorCategoria)
  if (categoryChecked.length != 0) {
    renderizarTarjetas(arrayEventosPorCategoria)
  } else {
    renderizarTarjetas(arrayEvents)
  }
})

const buscador = document.getElementById("buscador");
buscador.addEventListener("input", () => {
  let arrayFiltrado = []
  if (flagCheckbox == true) {
    arrayFiltrado = filtrarEventos(arrayEventosPorCategoria, buscador.value)
} else {
    arrayFiltrado = filtrarEventos(arrayEvents, buscador.value);
}
  renderizarTarjetas(arrayFiltrado)
})

function filtrarEventos(arrayEventos, texto) {
  let arrayEventosFiltrados = arrayEventos.filter((evento) =>
    evento.name.toLowerCase().includes(texto.toLowerCase())
  )
  return arrayEventosFiltrados
}