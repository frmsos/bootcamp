const acronym = (str) =>{
    let strtemp = "";
    //utilizamos un regex para filtrar y el join para convertir a cadena y el upper para convertir a mayuscula.
    strtemp = str.match(/\b([A-Za-z0-9])/g).join('').toUpperCase();
    return strtemp;
}
let str = acronym("¡En vivo desde Nueva York, es sábado por la noche!")
console.log(str)
str = acronym("no hay almuerzo gratis. Debes pagar por tu comida")
console.log(str)
