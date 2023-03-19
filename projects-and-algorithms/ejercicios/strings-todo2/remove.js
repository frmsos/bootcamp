const remove = arrstr => {
    let strtemp = [];
    let i = 0;
    let j = 0;
    let lenval;
    //iteremos el arr de str
    for(i = 0; i< arrstr.length; i ++)
    {
        lenval = false;
        for(j = 0 ; j<arrstr.length; j++){
            //se debe verificar que la longitud del resto de los elementos no coincida con el elemento sobre el cual corre el primer for
            if( i!==j){
                //se valida la longitud
                if( arrstr[i].length === arrstr[j].length) {
                    lenval = true;
                    break;
                }   
            }
        }
        //bandera en true si es que hay otros elementos con la misma longitud
        //sino, se puede agregar el elemento al vector temp
        if(!lenval  ){
            strtemp.push(arrstr[i]);
        }
    }
    
    return strtemp;
}
arrstr = ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."];
console.log(remove(arrstr))
arrstr = ["hola", "quet", "tul", "bingp", "ho", "fo"];
console.log(remove(arrstr))
