var nome = prompt("Digite seu tweet:")
var qtsCaracteres = nome.length


if (qtsCaracteres < 140){
    var diferenca = (140 - qtsCaracteres)
    console.log("Você ainda falta " + diferenca + " caracteres")
}

else {
    var passou = (qtsCaracteres - 140)
    console.log("Você passou " + passou + " caracteres")
}