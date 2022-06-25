// Gestion de asincronismo mediante async-await

const print = (texto) => console.log( texto )
const TIEMPO = 1000

async function hola(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout( function() {
            print('Iniciando conversacion...')
            print( `Hola ${nombre}.` )
            resolve( nombre )
        }, TIEMPO)
    } )
}

async function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout( function() {
            print('Bla bla bla.')
            resolve( nombre )
        }, TIEMPO)
    } )    
}

async function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout( function() {
            print( `Adios ${nombre}.` )
            print( 'Finalizando conversacion...' )
                resolve( nombre )
        }, TIEMPO)
    } )
}

async function conversacion() {
    let nombre = await hola('Edder')
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)
}

conversacion()