/* posso acessar por tag: getElementByTagName(), 
por id: getElementById(),
por nome: getElementByName(),
por classe: getElementByClassName(),
por seletor: queryselector(),

case sensitive = reconhece letras maíusculas e minúsculas. */

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 2) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }else {
    txtNome.innerHTML = 'Nome válido'
    txtNome.style.color = 'blue'
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    
    if(email.value.indexOf('@') ==-1 || email.value.indexOf('.com') ==-1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'blue'
    }
}
