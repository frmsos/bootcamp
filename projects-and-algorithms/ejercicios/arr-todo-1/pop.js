const popValue = (array)=>{
    //eliminamos el ultimo valor del arr
    let value = array.pop();
    if(array.length >0 ){
        const first = array[0];  //guardamos el valor eliminado
        for(let i=0; i<array.length - 1; i++){
            //vamos sobreescribiendo los valores
            array[i] = array[i+1];
        }
        //copiamos el ultimo valor del vector, obtenido en la operacion pop
        array[array.length-1] = value;
        return first;

    }
    //se retorna el unico valor del vector que queda eliminado
    else{
        return value;
    }
}

const array = [1,2];
console.log('antes', array)
let value = popValue(array)
console.log('dp', value, array)