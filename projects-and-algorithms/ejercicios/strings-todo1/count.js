const count = (str) =>{
    let counter = 0;
    for(let i=0; i<str.length;i++){
        //se recorre la cadena, si se encuentra un valor distinto de un espacio, se aumenta el contador
        if(str[i] !== ' '){
            counter++
        }
    }
    return counter;
}
const str = "Amor, me estás volviendo loca";
console.log(count(str));