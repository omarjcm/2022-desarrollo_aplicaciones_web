var articulos = [
    { nombre: 'Bicicleta', modelo: 'BMX', color: 'Azul', costo: 150 },
    { nombre: 'TV Sony', modelo: 'XBR-85Z8H', color: 'negro', costo: 7000  },
    { nombre: 'Laptop i5 16GB 14"', modelo: 'Lenovo', color: 'gris', costo: 860  },
    { nombre: 'Laptop i5 16GB 15"', modelo: 'Lenovo', color: 'gris', costo: 1100  },
    { nombre: 'Laptop i5 16GB 14"', modelo: 'DELL', color: 'gris', costo: 1100  },
    { nombre: 'Laptop i5 16GB 15"', modelo: 'DELL', color: 'gris', costo: 1300  },
    { nombre: 'Auriculares Cancel Noise', modelo: 'Sony', color: 'blanco', costo: 150  },
    { nombre: 'Audifonos Cancel Noise', modelo: 'Sony', color: 'azul', costo: 200  },
    { nombre: 'Mouse inalambrico', modelo: 'Kensington', color: 'negro', costo: 50  },
    { nombre: 'Mouse inalambrico', modelo: 'Havic', color: 'rojo', costo: 15  },
    { nombre: 'Tablet', modelo: 'Samsung', color: 'gris', costo: 400  },
]

// Uso del FOREACH
articulos.forEach( function(elemento) {
    console.log( elemento.nombre + ' - ' + elemento.modelo )
} )

// Uso del SOME (me proporciona true cuando existe o false cuando no existe)
var articulos_baratos = articulos.some( (dato) => dato.costo<100 )
console.log( articulos_baratos )

// Uso del FILTER
var articulos_filtrados = articulos.filter( (elemento) => elemento.costo <= 100 )
console.log(articulos_filtrados)

// Uso del MAP
var articulos_nuevos = articulos.map((dato) => dato.nombre.toUpperCase())
console.log(articulos_nuevos)

// Uso del FIND
var articulo_encontrado = articulos.find((dato) => dato.nombre == 'Laptop i5 16GB 14"' & 
    dato.modelo == 'DELL')
console.log(articulo_encontrado)