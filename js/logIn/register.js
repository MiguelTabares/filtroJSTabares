import { URL_COMPANIES } from "../api/URLS.js";

/* SELECTORS */
const formRegister = document.getElementById("formRegister");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputPasswordConfirmation = document.getElementById("password-confirmation");
const nameCompany = document.getElementById("company");
const imageCompany = document.getElementById("img-company");
const btnCreateAccount = document.getElementById("btnCreateAccount");

/* EVENTS */
formRegister.addEventListener("submit", (event) => {
    event.preventDefault();
    addNewUserCompany()
})

/* FUNCTIONS */
async function addNewUserCompany() {
    try {
        const response = await fetch(`${URL_COMPANIES}?email=${inputEmail.value}`)
        const data = await response.json() 


        if (!data.length) {

            alert("EMPRESA REGISTRADA EXITOSAMENTE");

            await fetch(`${URL_COMPANIES}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify({
                    "email": inputEmail.value,
                    "password": inputPassword.value,
                    "passwordConfirmation": inputPasswordConfirmation,
                    "name" : nameCompany.value,
                    "image" : imageCompany.value,
                })
            })


        } else {
            alert("El correo ingresado ya se ha registrado");
            formRegister.reset()
        }
        
    } catch (error) {
        console.error(error)
    }

}

