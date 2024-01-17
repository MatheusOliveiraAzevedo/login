import { validaEmail } from "./validaEmail.js"

let formulario = document.querySelector(".container-input")
let erroEmail = document.querySelector(".erroEmail")
let erroPassword = document.querySelector(".erroPassword")

formulario.addEventListener('submit', (event) => {
    
    var data = new FormData(formulario)
    var email = data.get('email')
    var password = data.get('password')

    if (password.length < 8) {
        erroPassword.textContent = "Digite uma Senha valida ( 8 caracteres )"
        event.preventDefault()
    } else {
        erroPassword.textContent = ''
    }

    if (!validaEmail(email)) {
        erroEmail.textContent = 'Digite um E-mail valido'
        event.preventDefault()

    } else {
        erroEmail.textContent = ''
    }

    if (validaEmail(email) && password.length >= 8) {
        alert("Login realizado com sucesso! ✅")
    }
} )