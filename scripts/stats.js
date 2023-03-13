const HTMLResponse1 = document.querySelector('#celda1')
const HTMLResponse2 = document.querySelector('#celda2')
const HTMLResponse3 = document.querySelector('#celda3')
const HTMLResponse4 = document.querySelector('#celda4')
const HTMLResponse5 = document.querySelector('#celda5')
const HTMLResponse6 = document.querySelector('#celda6')
const HTMLResponse7 = document.querySelector('#celda7')
const HTMLResponse8 = document.querySelector('#celda8')
const HTMLResponse9 = document.querySelector('#celda9')

let data;
async function getData() {
    await fetch(API_URL)
        .then(response => response.json())
        .then(json => data = json)
        let eventos = data.events
        let porcentajes = []
        let nombreEventoSegunPorcentaje = []
        let nombreEventoSegunCapacidad = []
        let capacities = []
        // Guarda los valores de los porcentajes en un array y tambien los nombres de esos eventos pasados
        for (let i=0; i<eventos.length; i++) {
            if (data.currentDate > eventos[i].date) {
                porcentajes.push(((eventos[i].assistance / eventos[i].capacity) * 100).toFixed(2));
                nombreEventoSegunPorcentaje.push(eventos[i].name)
                capacities.push(eventos[i].capacity)
                nombreEventoSegunCapacidad.push(eventos[i].name)
            }
        }
        //console.log(porcentajes)
        //console.log(capacities)

        // Ordeno los arrays de menor a mayor (segun el porcentaje y la capacidad, con su respectivo nombre)
        let dataLen = porcentajes.length
        //console.log(dataLen);
        for (let i=0; i < dataLen; i++) {
            for (let j=0; j < dataLen; j++) {
                if (j+1 !== dataLen) {
                    if (porcentajes[j] < porcentajes[j+1]) {
                        let swapPorcentaje = porcentajes[j+1];
                        let swapNombreSegunPorcentaje = nombreEventoSegunPorcentaje[j+1];
                        porcentajes[j+1] = porcentajes[j];
                        nombreEventoSegunPorcentaje[j+1] = nombreEventoSegunPorcentaje[j];
                        porcentajes[j] = swapPorcentaje;
                        nombreEventoSegunPorcentaje[j] = swapNombreSegunPorcentaje;
                    }
                    if (capacities[j] < capacities[j+1]) {
                        let swapCapacity = capacities[j+1];
                        let swapNombreSegunCapacidad = nombreEventoSegunCapacidad[j+1];
                        capacities[j+1] = capacities[j];
                        nombreEventoSegunCapacidad[j+1] = nombreEventoSegunCapacidad[j];
                        capacities[j] = swapCapacity;
                        nombreEventoSegunCapacidad[j] = swapNombreSegunCapacidad;
                    }
                }  
            }
        }
        //console.log(porcentajes)
        //console.log(nombreEventoSegunPorcentaje)
        //console.log(nombreEventoSegunCapacidad)
        //console.log(capacities)

        // Events with the highest percentage of attendance
        for (let j=0; j<3; j++) {
            HTMLResponse1.innerHTML += `<p>${nombreEventoSegunPorcentaje[j]} - ${porcentajes[j]}%</p>`
        }

        // Events with the lowest percentage of attendance
        for (let j=dataLen-1; j>=dataLen-3; j--) {
            HTMLResponse2.innerHTML += `<p>${nombreEventoSegunPorcentaje[j]} - ${porcentajes[j]}%</p>`
        }
        
        // Event with larger capacity
        for (let j=0; j<3; j++) {
            HTMLResponse3.innerHTML += `<p>${nombreEventoSegunCapacidad[j]} - ${capacities[j]}</p>`
        }
}
getData()