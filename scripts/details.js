const queryString = location.search
let parametros = new URLSearchParams(queryString)
let idExtraidoDelUrl = parametros.get("_id")
const eventDetail = arrayEvents.find(evento => evento._id == idExtraidoDelUrl)
//console.log(eventDetail)
const containerCardDetail = document.getElementById("containerCardDetail")
containerCardDetail.innerHTML = `<div class="container-horizontal-card">
                                    <div class="card mb-3">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img
                                                    src="${eventDetail.image}"
                                                    class="img-fluid rounded-start"
                                                    alt="..."
                                                />
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title">${eventDetail.name}</h5>
                                                    <p class="card-text">
                                                        ${eventDetail.description}
                                                    </p>
                                                    <span style="margin-right: 2rem"><i>Price:</i> $${eventDetail.price}</span>
                                                    <span><i>Category:</i> ${eventDetail.category}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a src="../index.html" type="button" class="btn btn-outline-dark" style="margin-left:20%">Back</a>`
