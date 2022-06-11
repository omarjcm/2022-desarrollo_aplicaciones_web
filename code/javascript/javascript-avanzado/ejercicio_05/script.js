var http_request = false
var dato = null

function consultar(url) {
    // crea el objeto que permite la coneccion con el servidor.
    http_request = false
    // Se verifica que en el navegador pueda crear un objeto de coneccion.
    if (window.XMLHttpRequest) {
        // Se crea el objeto
        http_request = new XMLHttpRequest()
    }
    // Se verifica que exista el objeto
    if (!http_request) {
        console.log('[error] No es posible crear una instancia XMLHTTP.')
        return false
    }
    http_request.onreadystatechange = respuesta
    http_request.open('GET', url, true)
    http_request.send()
}

function respuesta() {
    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            dato = http_request.responseText
        } else {
            console.log( 'Hubo problemas con la conexion.' )
        }
    }
}

const URL = 'https://rickandmortyapi.com/api/character/2'

consultar(URL)