const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const print = (mensaje) => console.log(mensaje)
const URL = 'https://rickandmortyapi.com/api/character/'

function conectar(url_personaje, fn) {
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', url_personaje, true)
    xhttp.onreadystatechange = function(data) {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                fn(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('[error]')
                return fn(error, null)
            }
        }
    }
    xhttp.send()
}

const invocacion_sincrona = function(error, dato) {
    if (error)
        return print(error)
    
    print( `Num de personajes existentes: ${dato.info.count}` )

    conectar(URL + dato.results[0].id, function(error2, dato2){
        if (error2)
            return print(error2)

        print( `${dato2.id} - ${dato2.name}` )

        conectar(URL + dato.results[1].id, function(error3, dato3){
            if (error3)
                return print(error3)

            print( `${dato3.id} - ${dato3.name}` )
        })
    })
}

conectar(URL, invocacion_sincrona)