import { validaEmail } from "./validaEmail.js"

let dialog = document.querySelector('.dialog-container')
let forgetPassword = document.querySelector('.forget-password')
let formularioDialog = document.querySelector('.form-dialog')
let emailRecover = document.querySelector('#emailRecover')
let erroEmail = document.querySelector('.erroEmailRecover')
let buttonCancel = document.querySelector('.button-cancel')


formularioDialog.addEventListener('submit', (event) => {

    var data = new FormData(formularioDialog)
    var email = data.get('emailRecover')

    if (!validaEmail(email)) {
        erroEmail.textContent = 'Insiera um E-mail valido!'
        event.preventDefault();
    } else {
        erroEmail.textContent = ''
        alert("Foi enviado para seu e-mail um link para recuperação da senha!")
        dialog.close();
    }
})

forgetPassword.addEventListener('click', () => {
    dialog.showModal()
    erroEmail.textContent = ''
})

buttonCancel.addEventListener('click', () => {
    emailRecover.value = ''
    erroEmail.textContent = ''
    dialog.close();
})