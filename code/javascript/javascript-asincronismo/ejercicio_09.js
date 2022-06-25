// Gestion de asincronismo mediante Promesas

const print = (texto) => console.log( texto )
const TIEMPO = 1000

function hola(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout( function() {
            print('Iniciando conversacion...')
            print( `Hola ${nombre}.` )
            resolve( nombre )
        }, TIEMPO)
    } )
}

function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout( function() {
            print('Bla bla bla.')
            resolve( nombre )
        }, TIEMPO)
    } )    
}

function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout( function() {
            print( `Adios ${nombre}.` )
            print( 'Finalizando conversacion...' )
                resolve( nombre )
        }, TIEMPO)
    } )
}

hola('Edder')
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( adios )
    .catch( (dato) => print(dato) )



