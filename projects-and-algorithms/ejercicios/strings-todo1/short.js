const short = (str, length ) => {
    //utilzamos la funcion filter, con el criterio de seleccion de una longitud mayor al valor de long indicado
    let tempstr = str.filter( (string=>{
        return string.length > length
    }))
    return tempstr;
}



let arryStr = ["prueba", "te", "pizza", "hotdog", "meat"];
console.log(short(arryStr, 5));