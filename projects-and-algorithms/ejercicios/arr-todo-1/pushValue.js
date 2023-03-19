//FUNCIONES
const pushValue = (array, value)=>{
    let newArray = [];
    //colacamos el valor en la primera pos y copiamos el resto del valor en las siguientes posiciones del arr
    newArray = [value, ...array]
    return newArray
}

let array = [3,412,245,24];
console.log('antes', array)

array = pushValue(array, 4567)
console.log('dp', array)


//