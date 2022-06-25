// Gestion de asincronismo mediante callbacks

const print = (texto) => console.log( texto )
const TIEMPO = 1000

function adios(nombre) {
    setTimeout( function() {
        print( `Adios ${nombre}.` )
        print( `Finalizando conversacion.` )
    }, TIEMPO)
}

function hola( nombre, fn ) {
    setTimeout( function() {
        print('Iniciando conversacion...')
        print( `Hola ${nombre}.` )
        fn( nombre )
    }, TIEMPO)
}

function hablar(fn) {
    setTimeout( function() {
        print( `Bla bla bla.` )
        fn()
    }, TIEMPO)
}

function dialogar(nombre, num_veces) {
    if (num_veces > 0) {
        hablar(function(){
            dialogar(nombre, --num_veces)
        })
    } else {
        adios(nombre)
    }
}

function iniciar_conversacion(nombre) {
    dialogar(nombre, 20)
}

hola('Jose Andrés', iniciar_conversacion)