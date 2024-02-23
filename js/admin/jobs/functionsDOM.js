import { cleanHTML } from "../../utils/cleanHTML.js";
import { deleteJob, idJobUpdate } from "./jobs.js";


const jobsTbody = document.getElementById("jobsTbody");
const btnOpenModalJobs = document.getElementById('btnOpenModalJobs');

export function printJobs(jobs){
    cleanHTML(jobsTbody);

    jobs.forEach((job) => {
        const tr = document.createElement("tr");

        const tdImage = document.createElement("td");
        const tdCompany = document.createElement("td");
        const tdDescription = document.createElement("td");
        const tdLocation = document.createElement("td");
        const tdExperience = document.createElement("td");
        const tdModality = document.createElement("td");
        const tdSalary = document.createElement("td");
        const tdActions = document.createElement("td");

        const image = document.createElement("img");
        image.src = job.urlImage;
        image.width = "50";
        image.height = "50";
        image.classList.add("rounded-circle");

        const btnEdit = document.createElement("button");
        const btnDelete = document.createElement("button");

        btnEdit.classList.add("btn","btn-primary");
        btnDelete.classList.add("btn","btn-danger");

        btnEdit.textContent = "Editar";
        btnDelete.textContent = "Eliminar"

        btnEdit.addEventListener("click", () => {
            loadInfoJob(job.id);
        })

        btnDelete.addEventListener("click", () => {
            deleteJob(job.id);
        })

        tdCompany.textContent = job.company;
        tdDescription.textContent = job.description;
        tdLocation.textContent = job.location;
        tdExperience.textContent = job.experience;
        tdModality.textContent = job.modality;
        tdSalary.textContent = job.salary;

        tdImage.appendChild(image);
        tdActions.appendChild(btnEdit);
        tdActions.appendChild(btnDelete);

        tr.appendChild(tdImage);
        tr.appendChild(tdCompany);
        tr.appendChild(tdDescription);
        tr.appendChild(tdLocation);            
        tr.appendChild(tdExperience);
        tr.appendChild(tdModality);  
        tr.appendChild(tdSalary);                                              
        tr.appendChild(tdActions);

        jobsTbody.appendChild(tr);
    });
}

function loadInfoJob(job){
    btnOpenModalJobs.click();

    tdCompany.value = job.company;
    tdDescription.value = job.description;
    tdLocation.value = job.location;
    tdExperience.value = job.experience;
    tdModality.value = job.modality;
    tdSalary.value = job.salary;
    idJobUpdate.value = job.id;
}