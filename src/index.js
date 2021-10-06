
const Store = require('./store.class')

const myStore = new Store(1)


const Samsung = {
    name: 'TV Samsung MP45',
    price: 345.95,
    units: 3,
}

const abaco = {
    name: 'Ábaco de madera',
    price: 245.95,
}
const impresora = {
    name: 'impresora Epson LX-455',
    price: 45.95,
}
const usb = {
    name: 'USB Kingston 16GB',
    price: 5.95,
    units: 45,
}

let productoSamsung = myStore.addProduct(Samsung)
let productoUsb = myStore.addProduct(usb)
let productoImpresora = myStore.addProduct(impresora)
let productoAbaco = myStore.addProduct(abaco)
let clonSamsung={
    id: productoSamsung.id,
    price: 325.90,
    units: 8
}
console.log(myStore.toString())

try{
    clonSamsung= myStore.changeProduct(clonSamsung)
}catch(error){
    console.error(error)
}

try {
    let productoTv = myStore.changeProductUnits(clonSamsung.id,-10)
} catch (error) {
    console.error(error)
}
try {
    myStore.delProduct(productoSamsung.id)
} catch (error) {
    console.error(error)
}


let impresoraClon = {
    id: productoImpresora.id,
    price: 55.90,
    units: -2
}
try{
    impresoraClon = myStore.changeProduct(impresoraClon)
    
}catch(error){
    console.error(error)
}
try {
    myStore.delProduct(productoImpresora.id)
} catch (error) {
    console.error(error)
}


try{
   
    let clonAbaco = myStore.changeProductUnits(productoAbaco.id,15)
    let nuevoModeloAbaco= {
        id: clonAbaco.id,
        name: 'Abaco de madera (nuevo modelo)'
    }
    nuevoModeloAbaco = myStore.changeProduct(nuevoModeloAbaco)
}catch(error){
    console.error(error)
}

try {
    
    console.log('LISTADO DE ALMACÉN ALFABÉTICO')
    let ordenado = myStore.orderByName()
    console.log(myStore.render(ordenado))
    console.log('LISTADO DEL ALMACÉN POR EXISTENCIAS')
    let ordenadoUnits = myStore.orderByUnits()
    console.log(myStore.render(ordenadoUnits))
    console.log('LISTADO DE PRODUCTOS CON POCAS EXISTENCIAS')
    let pocasExistencias = myStore.underStock(10)
    console.log(myStore.render(pocasExistencias))
} catch (error) {
    console.error(error)
}


  


/* //try{
    
   
  
   
    console.log(myStore.toString())
   
}catch(error){
    console.error(error)
} */


// Creamos un nuevo almacén con id 1
// Antes deberás haber importado la 
// clase Store para poder usarla

// Añadimos los 4 objetos que nos piden

// Hacemos las 5 modificaciones


// Mostramos por consola todo lo que nos piden

// Eliminamos los 2 productos

// Mostramos por consola todo lo que nos pide
