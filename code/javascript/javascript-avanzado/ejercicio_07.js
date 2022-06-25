const formato_fecha = (fecha, ubicacion, opciones) => 
    new Intl.DateTimeFormat(ubicacion, opciones).format(fecha)

const hoy = new Date()

console.log( hoy )
console.log( formato_fecha(hoy, 'es') )
console.log( formato_fecha(hoy, 'es', {dateStyle: 'long'}) )
console.log( formato_fecha(hoy, 'es', {timeStyle: 'short'}) )
console.log( formato_fecha(hoy, 'en') )
console.log( formato_fecha(hoy, 'ko') )
console.log( formato_fecha(hoy, 'en', {weekday:'short', day:'numeric'}) )
console.log( formato_fecha(hoy, 'es', {weekday:'short', day:'numeric'}) )
console.log( formato_fecha(hoy, 'es', {weekday:'long', day:'numeric'}) )


