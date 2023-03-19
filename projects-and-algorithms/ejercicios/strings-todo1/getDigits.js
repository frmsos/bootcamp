const getDigits = (str) =>{
    let strTemp = "";
    //se recorre la cadena
    for(let i=0;i<str.length;i++){
        //se valida si el caracter corresponde a un numero
        if(!isNaN(parseInt(str[i]))){
            // de ser asi, se concatena en una cadena auxiliar
            strTemp = strTemp + str[i];
        }
    }
    //luego se retorna la cadena con numero, convertida en un valor entero
    return parseInt(strTemp)
}
let str = "0s1a3y5w7h9a2t4? 6! 8? 0";
console.log('number is' , getDigits(str))
