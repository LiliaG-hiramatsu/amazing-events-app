const API_URL = 'https://mindhub-xj03.onrender.com/api/amazing'

fetch(API_URL)
    .then(res => res.json())
    .then(response => {
        let data = response.events
        let fechaActual = response.currentDate
        renderizarTablaEventsStatistics(data, fechaActual)
        renderizarTablaUpcoming(data, fechaActual)
        renderizarTablaPast(data, fechaActual)
    })

function renderizarCategorias(eventos) {
    // Categories
    const categoryFilter = eventos.map((e) => e.category);
    const categories = categoryFilter.reduce((c, e) => {
        if (!c.includes(e)) {
            c.push(e)
        }
        return c
    }, [])
    //console.log(categories)
    return categories
}

function calcularGanancias(events, categories) {

    let eventosCategoria0 = []
    let eventosCategoria1 = []
    let eventosCategoria2 = []
    let eventosCategoria3 = []
    let eventosCategoria4 = []
    let eventosCategoria5 = []
    let eventosCategoria6 = []
    
    for (let evento of events) {
        if (evento.category === categories[0]) {
            eventosCategoria0.push(evento)
        }
        else if (evento.category === categories[1]) {
            eventosCategoria1.push(evento)
        }
        else if (evento.category === categories[2]) {
            eventosCategoria2.push(evento)
        }
        else if (evento.category === categories[3]) {
            eventosCategoria3.push(evento)
        }
        else if (evento.category === categories[4]) {
            eventosCategoria4.push(evento)
        }
        else if (evento.category === categories[5]) {
            eventosCategoria5.push(evento)
        }
        else if (evento.category === categories[6]) {
            eventosCategoria6.push(evento)
        }
    }

    let gananciasDeCategoria0 = []
    let gananciasDeCategoria1 = []
    let gananciasDeCategoria2 = []
    let gananciasDeCategoria3 = []
    let gananciasDeCategoria4 = []
    let gananciasDeCategoria5 = []
    let gananciasDeCategoria6 = []

    eventosCategoria0.forEach((e) => {
        if (e.assistance != undefined) {
            gananciasDeCategoria0.push(e.price*e.assistance)
        } else {
            gananciasDeCategoria0.push(e.price*e.estimate)
        }
    })
    eventosCategoria1.forEach((e) => {
        if (e.assistance != undefined) {
            gananciasDeCategoria1.push(e.price*e.assistance)
        } else {
            gananciasDeCategoria1.push(e.price*e.estimate)
        }
    })
    eventosCategoria2.forEach((e) => {
        if (e.assistance != undefined) {
            gananciasDeCategoria2.push(e.price*e.assistance)
        } else {
            gananciasDeCategoria2.push(e.price*e.estimate)
        }
    })
    eventosCategoria3.forEach((e) => {
        if (e.assistance != undefined) {
            gananciasDeCategoria3.push(e.price*e.assistance)
        } else {
            gananciasDeCategoria3.push(e.price*e.estimate)
        }
    })
    eventosCategoria4.forEach((e) => {
        if (e.assistance != undefined) {
            gananciasDeCategoria4.push(e.price*e.assistance)
        } else {
            gananciasDeCategoria4.push(e.price*e.estimate)
        }
    })
    eventosCategoria5.forEach((e) => {
        if (e.assistance != undefined) {
            gananciasDeCategoria5.push(e.price*e.assistance)
        } else {
            gananciasDeCategoria5.push(e.price*e.estimate)
        }
    })
    eventosCategoria6.forEach((e) => {
        if (e.assistance != undefined) {
            gananciasDeCategoria6.push(e.price*e.assistance)
        } else {
            gananciasDeCategoria6.push(e.price*e.estimate)
        }
    })

    let gananciasPorCategoria = []
    let suma0 = 0
    for (let ganancia of gananciasDeCategoria0) {
        suma0 += ganancia
    }
    gananciasPorCategoria.push(suma0)

    let suma1 = 0
    for (let ganancia of gananciasDeCategoria1) {
        suma1 += ganancia
    }
    gananciasPorCategoria.push(suma1)
    
    let suma2 = 0
    for (let ganancia of gananciasDeCategoria2) {
        suma2 += ganancia
    }
    gananciasPorCategoria.push(suma2)

    let suma3 = 0
    for (let ganancia of gananciasDeCategoria3) {
        suma3 += ganancia
    }
    gananciasPorCategoria.push(suma3)

    let suma4 = 0
    for (let ganancia of gananciasDeCategoria4) {
        suma4 += ganancia
    }
    gananciasPorCategoria.push(suma4)

    let suma5 = 0
    for (let ganancia of gananciasDeCategoria5) {
        suma5 += ganancia
    }
    gananciasPorCategoria.push(suma5)

    let suma6 = 0
    for (let ganancia of gananciasDeCategoria6) {
        suma6 += ganancia
    }
    gananciasPorCategoria.push(suma6)
    //console.log(gananciasPorCategoria)
    return gananciasPorCategoria
}

function calcularPromedios(events, categories) {

    let eventosCategoria0 = []
    let eventosCategoria1 = []
    let eventosCategoria2 = []
    let eventosCategoria3 = []
    let eventosCategoria4 = []
    let eventosCategoria5 = []
    let eventosCategoria6 = []
    
    for (let evento of events) {
        if (evento.category === categories[0]) {
            eventosCategoria0.push(evento)
        }
        else if (evento.category === categories[1]) {
            eventosCategoria1.push(evento)
        }
        else if (evento.category === categories[2]) {
            eventosCategoria2.push(evento)
        }
        else if (evento.category === categories[3]) {
            eventosCategoria3.push(evento)
        }
        else if (evento.category === categories[4]) {
            eventosCategoria4.push(evento)
        }
        else if (evento.category === categories[5]) {
            eventosCategoria5.push(evento)
        }
        else if (evento.category === categories[6]) {
            eventosCategoria6.push(evento)
        }
    }
    // Promedio de porcentajes de asistencia por categoria
    let porcentajesDeCategoria0 = []
    let porcentajesDeCategoria1 = []
    let porcentajesDeCategoria2 = []
    let porcentajesDeCategoria3 = []
    let porcentajesDeCategoria4 = []
    let porcentajesDeCategoria5 = []
    let porcentajesDeCategoria6 = []

    eventosCategoria0.forEach((e) => {
        if (e.assistance != undefined) {
            porcentajesDeCategoria0.push((e.assistance*100/e.capacity).toFixed(2))
        } else {
            porcentajesDeCategoria0.push((e.estimate*100/e.capacity).toFixed(2))
        }
    })
    eventosCategoria1.forEach((e) => {
        if (e.assistance != undefined) {
            porcentajesDeCategoria1.push((e.assistance*100/e.capacity).toFixed(2))
        } else {
            porcentajesDeCategoria1.push((e.estimate*100/e.capacity).toFixed(2))
        }
    })
    eventosCategoria2.forEach((e) => {
        if (e.assistance != undefined) {
            porcentajesDeCategoria2.push((e.assistance*100/e.capacity).toFixed(2))
        } else {
            porcentajesDeCategoria2.push((e.estimate*100/e.capacity).toFixed(2))
        }
    })
    eventosCategoria3.forEach((e) => {
        if (e.assistance != undefined) {
            porcentajesDeCategoria3.push((e.assistance*100/e.capacity).toFixed(2))
        } else {
            porcentajesDeCategoria3.push((e.estimate*100/e.capacity).toFixed(2))
        }
    })
    eventosCategoria4.forEach((e) => {
        if (e.assistance != undefined) {
            porcentajesDeCategoria4.push((e.assistance*100/e.capacity).toFixed(2))
        } else {
            porcentajesDeCategoria4.push((e.estimate*100/e.capacity).toFixed(2))
        }
    })
    eventosCategoria5.forEach((e) => {
        if (e.assistance != undefined) {
            porcentajesDeCategoria5.push((e.assistance*100/e.capacity).toFixed(2))
        } else {
            porcentajesDeCategoria5.push((e.estimate*100/e.capacity).toFixed(2))
        }
    })
    eventosCategoria6.forEach((e) => {
        if (e.assistance != undefined) {
            porcentajesDeCategoria6.push((e.assistance*100/e.capacity).toFixed(2))
        } else {
            porcentajesDeCategoria6.push((e.estimate*100/e.capacity).toFixed(2))
        }
    })

    let promediosPorCategoria = []

    let suma0 = 0
    if (porcentajesDeCategoria0.length != 0) {
        for (let porcentaje of porcentajesDeCategoria0) {
            suma0 += parseFloat(porcentaje)
        }
        let promedioCategoria0 = (suma0 / porcentajesDeCategoria0.length).toFixed(2)
        promediosPorCategoria.push(promedioCategoria0)
    } else {
        promediosPorCategoria.push("0.00")
    }
    let suma1 = 0
    if (porcentajesDeCategoria1.length != 0) {
        for (let porcentaje of porcentajesDeCategoria1) {
            suma1 += parseFloat(porcentaje)
        }
        let promedioCategoria1 = (suma1 / porcentajesDeCategoria1.length).toFixed(2)
        promediosPorCategoria.push(promedioCategoria1)
    } else {
        promediosPorCategoria.push("0.00")
    }
    let suma2 = 0
    if (porcentajesDeCategoria2.length != 0) {
        for (let porcentaje of porcentajesDeCategoria2) {
            suma2 += parseFloat(porcentaje)
        }
        let promedioCategoria2 = (suma2 / porcentajesDeCategoria2.length).toFixed(2)
        promediosPorCategoria.push(promedioCategoria2)
    } else {
        promediosPorCategoria.push("0.00")
    }
    let suma3 = 0
    if (porcentajesDeCategoria3.length != 0) {
        for (let porcentaje of porcentajesDeCategoria3) {
            suma3 += parseFloat(porcentaje)
        }
        let promedioCategoria3 = (suma3 / porcentajesDeCategoria3.length).toFixed(2)
        promediosPorCategoria.push(promedioCategoria3)
    } else {
        promediosPorCategoria.push("0.00")
    }
    let suma4 = 0
    if (porcentajesDeCategoria4.length != 0) {
        for (let porcentaje of porcentajesDeCategoria4) {
            suma4 += parseFloat(porcentaje)
        }
        let promedioCategoria4 = (suma4 / porcentajesDeCategoria4.length).toFixed(2)
        promediosPorCategoria.push(promedioCategoria4)
    } else {
        promediosPorCategoria.push("0.00")
    }
    let suma5 = 0
    if (porcentajesDeCategoria5.length != 0) {
        for (let porcentaje of porcentajesDeCategoria5) {
            suma5 += parseFloat(porcentaje)
        }
        let promedioCategoria5 = (suma5 / porcentajesDeCategoria5.length).toFixed(2)
        promediosPorCategoria.push(promedioCategoria5)
    } else {
        promediosPorCategoria.push("0.00")
    }
    let suma6 = 0
    if (porcentajesDeCategoria6.length != 0) {
        for (let porcentaje of porcentajesDeCategoria6) {
            suma6 += parseFloat(porcentaje)
        }
        let promedioCategoria6 = (suma6 / porcentajesDeCategoria6.length).toFixed(2)
        promediosPorCategoria.push(promedioCategoria6)
    } else {
        promediosPorCategoria.push("0.00")
    }
    //console.log(promediosPorCategoria)
    return promediosPorCategoria
}

function renderizarTablaEventsStatistics(eventos, fechaActual) {

    // Events statistics. Solo para eventos pasados.
    let eventsCopy = []
    for (let evento of eventos) {
        if (fechaActual > evento.date) {
            eventsCopy.push(evento)
        }
    }
    //console.log(eventsCopy)

    let EventosOrdenadosSegunPorcentaje = eventsCopy.sort((a, b) => b.assistance*100/b.capacity - a.assistance*100/a.capacity)
    //console.log(EventosOrdenadosSegunPorcentaje)
    let porcentajes = []
    let nombresSegunPorcentaje = []
    let capacities = []
    let nombresSegunCapacidad = []
    for (const evento of EventosOrdenadosSegunPorcentaje) {
        porcentajes.push((evento.assistance*100/evento.capacity).toFixed(2))
        nombresSegunPorcentaje.push(evento.name)
    }
    //console.log(porcentajes)
    
    let EventosOrdenadosSegunCapacidad = eventsCopy.sort((a, b) => b.capacity - a.capacity)
    //console.log(EventosOrdenadosSegunCapacidad)
    for (const evento of EventosOrdenadosSegunCapacidad) {
        capacities.push(evento.capacity)
        nombresSegunCapacidad.push(evento.name)
    }
    //console.log(capacities)
    let dataLen = porcentajes.length

    const tabla1 = document.getElementById("tabla1")
    for (let j=0; j<3; j++) {
        tabla1.innerHTML += `<tr>
                                <td>${nombresSegunPorcentaje[j]} <i class="fa-solid fa-arrow-right"></i> ${porcentajes[j]}%</td>
                                <td>${nombresSegunPorcentaje[dataLen-1 - j]} <i class="fa-solid fa-arrow-right"></i> ${porcentajes[dataLen-1 - j]}%</td>
                                <td>${nombresSegunCapacidad[j]} <i class="fa-solid fa-arrow-right"></i> ${capacities[j]}</td>
                            </tr>`
    }
}

function renderizarTablaUpcoming(eventos, fechaActual) {
    
    // Upcoming events statistics by category
    // Categories
    const categories = renderizarCategorias(eventos)

    let upComingEvents = []
    for (let evento of eventos) {
        if (fechaActual < evento.date) {
            upComingEvents.push(evento)
        }
    }

    // Revenues
    let gananciasPorCategoria = calcularGanancias(upComingEvents, categories)
    
    // Promedio de porcentajes de asistencia por categoria
    let promediosPorCategoria = calcularPromedios(upComingEvents, categories)

    const tabla2 = document.getElementById("tabla2")
    for (let i = 0; i < categories.length; i++) {
        tabla2.innerHTML += `<tr>
                                <td>${categories[i]}</td>
                                <td>$${gananciasPorCategoria[i]}</td>
                                <td>${promediosPorCategoria[i]}%</td>
                            </tr>`
    }   
}

function renderizarTablaPast(eventos, fechaActual) {
    
    // Past events statistics by category
    // Categories
    const categories = renderizarCategorias(eventos)

    let pastEvents = []
    for (let evento of eventos) {
        if (fechaActual > evento.date) {
            pastEvents.push(evento)
        }
    }

    // Revenues
    let gananciasPorCategoria = calcularGanancias(pastEvents, categories)
    
    // Promedio de porcentajes de asistencia por categoria
    let promediosPorCategoria = calcularPromedios(pastEvents, categories)
    
    const tabla3 = document.getElementById("tabla3")
    for (let i = 0; i < categories.length; i++) {
        tabla3.innerHTML += `<tr>
                                <td>${categories[i]}</td>
                                <td>$${gananciasPorCategoria[i]}</td>
                                <td>${promediosPorCategoria[i]}%</td>
                            </tr>`
    }
}