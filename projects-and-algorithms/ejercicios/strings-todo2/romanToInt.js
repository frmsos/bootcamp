const parseRomanInt = romanNum => {
    //array con objetos precargados
    const romanTable = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (let i=0; i < romanNum.length; i++){
        //verficamos el valor actual y el siguiente
        const curval = romanTable[romanNum[i]];
        const nextval = romanTable[romanNum[i+1]];
        //para los casos especiales, ej. 4
        if (curval < nextval){
            result += nextval - curval 
            i++
        } else {
            result += curval
        }
    }

    return result; 
}
console.log(parseRomanInt('MXDII'))