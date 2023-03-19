const interchange = (arr) =>{
    let index;
    let tempvar;
    //obtenemos el indice de acuerdo a si el vector tiene longitud par o impar
    if(arr.length % 2 ===0){
        index = arr.length
    }
    else{
        index = arr.length -1;
    }
    //iteramos en posiciones de a dos miembros
    for(let i =0;i<index-1;i=i+2){
        tempvar = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = tempvar;
    }
    return arr;
}
array = [12,23,34,45];
array = interchange(array);
console.log('dp', array)
array = ["Brendan", true, 42];
array = interchange(array);
console.log('dp', array)