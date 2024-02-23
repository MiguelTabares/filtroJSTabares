import { URL_COMPANIES } from "../api/URLS.js";

/* SELECTORS */
const formLogin = document.getElementById('formLogin');
const emailLogIn = document.getElementById('emailLogIn');
const passwordLogIn = document.getElementById('passwordLogIn');
// const btnLogIn = document.getElementById('#btnLogIn');

console.log(formLogin);
/* EVENTS */
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();



    logIn();
}); 

/* FUNCTIONS */
async function logIn(){
    const response = await fetch(`${URL_COMPANIES}?email=${emailLogIn.value}`);
    const data = await response.json();
    console.log(data);

    if (!data){
        alert("El email de la empresa no ha sido registrado todavía");
        return;
    }

    if ((data[0].password) !== passwordLogIn.value){
        alert("La contraseña ingresada es incorrecta. Intente nuevamente");
        formLogin.reset();
        return;
    }

    alert("CREDENCIALES CORRECTAS. Has iniciado sesión correctamente");
    localStorage.setItem('company', JSON.stringify(data[0]));
    window.location.href = "administrator.html";


}

