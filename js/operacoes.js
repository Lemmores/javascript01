var num1 = Number(prompt("Digite o primeiro número: "))
var num2 = Number(prompt("Digite o segundo número: "))

function somar(x,y) {
    return x + y
}

function subtrair(x,y) {
    return x - y
}


function multiplicar(x,y){
    return x * y
}

function dividir(x,y){
    return x / y
}

function potenciar(x,y){
    return x ** y
}



//invocar função
var resultado = somar(num1,num2)
console.log(resultado)

var resultado = subtrair(num1,num2)
console.log(resultado)

var resultado = multiplicar(num1,num2)
console.log(resultado)

var resultado = dividir(num1,num2)
console.log(resultado)

var resultado = potenciar(num1,num2)
console.log(resultado)