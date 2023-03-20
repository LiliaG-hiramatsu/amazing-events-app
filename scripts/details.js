const API_URL = 'https://mindhub-xj03.onrender.com/api/amazing'

fetch(API_URL)
    .then(res => res.json())
    .then(response => {
        let data = response.events
        renderizarDetails(data)
    })

function renderizarDetails(arr) {
    const queryString = location.search
    let parametros = new URLSearchParams(queryString)
    let idExtraidoDelUrl = parametros.get("id")
    let pageExtraidoDeUrl = parametros.get("page")
    const eventDetail = arr.find(evento => evento._id == idExtraidoDelUrl)
    
    const containerCardDetail = document.getElementById("containerCardDetail")
    containerCardDetail.innerHTML = `<div class="container-horizontal-card">
                                        <div class="card mb-3">
                                            <div class="row g-0">
                                                <div class="col-md-4">
                                                    <img
                                                        src="${eventDetail.image}"
                                                        class="img-fluid rounded-start"
                                                        alt="Imagen del evento"
                                                    />
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <h5 class="card-title">${eventDetail.name}</h5>
                                                        <p class="card-text">
                                                            ${eventDetail.description}
                                                        </p>
                                                        <p class="card-text">
                                                            <span style="margin-right: 2rem"><i>Price:</i> $${eventDetail.price}</span>
                                                            <span><i>Category:</i> ${eventDetail.category}</span>
                                                        </p>
                                                        <p class="card-text">
                                                            <span style="margin-right: 2rem"><i>Date:</i> ${eventDetail.date}</span>
                                                            <span><i>Place:</i> ${eventDetail.place}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="..${pageExtraidoDeUrl}" type="button" class="btn btn-outline-dark" style="margin-left:20%">Back</a>`
}
