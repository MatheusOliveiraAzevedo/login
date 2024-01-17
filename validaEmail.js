export function validaEmail (email) {
    var rx = /\S+@\S+\.\S+/;
    return rx.test(email)
}