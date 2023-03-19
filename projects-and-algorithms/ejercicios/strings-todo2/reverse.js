const reverse = str => {
    strtemp = "";
    //recorremos el vector desde el final y contactenamos con el strtemp
    for (let i = str.length - 1; i >= 0; i--) {
        strtemp = strtemp + str[i];
        } 
    return strtemp;
}
let str = "criatura";
console.log(reverse(str));