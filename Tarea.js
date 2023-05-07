
//1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
//para valor 6

function  piramide(numero){
    let palabra = '';
    for (let index = 1; index < numero+1; index++) {
        palabra = palabra + index;
        console.log(palabra);
    }
}
//EJEMPLO
//piramide(6);

//2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

function similar(arreglo1, arreglo2, resultado){
    let indice = 0;
    for (let index1 = 0; index1 < arreglo1.length; index1++) {
        for (let index2 = 0; index2 < arreglo2.length; index2++) {
           if (arreglo1[index1] == arreglo2[index2] && !resultado.includes(arreglo1[index1])){
             resultado[indice] = arreglo1[index1];
             indice++;
           }
        }
    }
}

//EJEMPLO
arreglo1 = [4, 3, true, 'manzana']
arreglo2 = ['pera', 3, false, true, 3, true]
resultado = []
similar(arreglo1, arreglo2, resultado)
console.log(resultado)
//Resultado: [3, true]


arreglo1 = ['rojo', 'azul', 'amarillo']
arreglo2 = ['blanco', 'negro', 'rojo']
resultado = []
similar(arreglo1, arreglo2, resultado)
console.log(resultado)
//Resultado: ['rojo']


//3)
//3.1) Dado el siguiente objeto
//let carrito = {
//    montoTotal: 10,
//    productos: ["Leche"]
//}

//Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.

//3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
//agregarProducto(nombre, precio, unidades) {
    // Completar aca...
//}


//3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”
class Carrito{
    constructor(montoTotal, productos){
        this.montoTotal = montoTotal;
        this.productos = productos;
    }

    agregarProducto(nombre, precio, unidades){
        if(!this.productos.includes(nombre)){
            this.productos.push(nombre);
            this.montoTotal = this.montoTotal + (precio*unidades);
        } else {
            console.log(`Ya existe ${nombre} con ${unidades} unidades`);
        }
    }
}