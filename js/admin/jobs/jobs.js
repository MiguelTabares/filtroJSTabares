import { URL_JOBS } from "../../api/URLS.js";
import { deleteHttp, get, post, update } from "../../api/HTTPclient.js";
import { printJobs } from "../jobs/functionsDOM.js";

/* SELECTORS */
const formNewJobs = document.getElementById('formNewJobs');
export const titleJob = document.getElementById('titleJob');
export const experienceJob = document.getElementById('experienceJob');
export const salaryJob = document.getElementById('salaryJob');
export const locationJob = document.getElementById('locationJob');
export const modalityJob = document.getElementById('modalityJob');
export const descriptionJob = document.getElementById('descriptionJob');
export const btnSaveNewJob = document.getElementById('btnSaveNewJob');
export const idJobUpdate = document.getElementById('idJobUpdate');


/* EVENTS */
document.addEventListener('DOMContentLoaded', () => {
    getJobs();
})

formNewJobs.addEventListener('submit', (event) => {
    event.preventDefault();
    if(idJobUpdate.value){
        updateJob()
    } else {
        createJob();
    }

})

async function createJob(){
    /* Se parsea la info traída del localStorage */
    const company = JSON.parse(localStorage.getItem("company"))
    
    const newJob = {
        "image": "https://riwi.io/wp-content/uploads/2023/07/Fondo-claro-logo.png",
        "company": "Riwi",
        "description": descriptionJob.value,
        "location": locationJob.value,
        "experience": experienceJob.value,
        "modality": modalityJob.value,
        "salary": salaryJob.value,
        /* LLAVE FORÁNEA */
        "companyId": company.value,
    }

    await post(URL_JOBS, newJob);
}


async function getJobs(){
    const jobs = await get(`${URL_JOBS}?_embed=companies&_embed=jobs`); 
    console.log(jobs);

    printJobs(jobs);
}


export async function deleteJob(id){
    await deleteHttp(`${URL_JOBS}/${id}`);
}


async function updateJob(){
    const company = JSON.parse(localStorage.getItem("company"))

    const newJob = {
        "image": "https://riwi.io/wp-content/uploads/2023/07/Fondo-claro-logo.png",
        "company": "Riwi",
        "description": descriptionJob.value,
        "location": locationJob.value,
        "experience": experienceJob.value,
        "modality": modalityJob.value,
        "salary": salaryJob.value,
        /* LLAVE FORÁNEA */
        "companyId": company.value,

    }

    await update(`${URL_JOBS}/${idJobUpdate.value}`,newJob);
}