var num1 = document.querySelector('#num1')
var num2 = document.querySelector('#num2') 
var resultado = document.querySelector('span')

function soma(){
    resultado.innerHTML = parseInt(num1.value) + parseInt(num2.value)
}

function subtracao(){
    resultado.innerHTML = parseInt(num1.value) - parseInt(num2.value)
}

function multiplicacao(){
    resultado.innerHTML = parseInt(num1.value) * parseInt(num2.value)
}

function divisao(){
    resultado.innerHTML = parseInt(num1.value) / parseInt(num2.value)
}


