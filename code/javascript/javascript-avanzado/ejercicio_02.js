// Funcion declarativa
function suma(a, b) {
    return a+b
}

// Funcion expresiva
var suma2 = function(a, b) {
    return a + b
}

// Funcion flecha
var suma3 = (a, b) => a+b

console.log( suma(1, 2) )
console.log( suma2(1, 2) )
console.log( suma3(1, 2) )

var suma4 = (a, b) => {
    console.log(a + ' - ' + b)
    return a+b
}

console.log( suma4(1, 2) )