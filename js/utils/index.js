import { URL_JOBS } from "../api/URLS.js";

const cardsJobsIndex = document.getElementById("cardsJobsContainer");

document.addEventListener('DOMContentLoaded', printCardsJobs);

async function printCardsJobs(){
    const response = await fetch(URL_JOBS)
    const data = await response.json();
    console.log(data);

    data.forEach(newCard => {
        cardsJobsIndex.innerHTML += `
            <div class="card-job">
                <h2>${newCard.description}</h2>

                <p>
                En estos momentos nos encontramos en búsqueda de un talento para
                cumplir el rol deDesarrollador Front-end Experiencia y conocimientos:
                más de dos (2) años o superior en: Metodologías ágiles (Scrum/Kanban)
                Marco SPA (Angular)
                </p>

                <div class="row">
                <div class="col-6">
                    <div class="d-flex gap-2 align-items-center fs-5 text-muted">
                    <i class="bx bx-current-location"></i>
                    <span class="fw-semibold">Medellin</span>
                    </div>

                    <div class="d-flex gap-2 align-items-center fs-5 text-muted">
                    <i class="bx bx-time"></i>
                    <span class="fw-semibold">10-02-2024</span>
                    </div>
                </div>

                <div class="col-6 d-flex justify-content-end">
                    <img
                    src="${newCard.image}"
                    alt="logo"
                    height="80"
                    width="80"
                    class="object-fit-contain rounded-circle img-company"
                    />
                </div>
                </div>
            </div>
        `
    });
}

