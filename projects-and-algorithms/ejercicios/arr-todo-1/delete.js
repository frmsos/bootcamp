const deleteItem = (arr, pos) =>{
    let tempArr = [];
    const deletedValue = arr[pos];
    //copiamos los valores hasta una posicion antes del indice que queremos modificar
    for(let i=0;i<pos;i++)
    {
        tempArr[i] = arr[i]
    }
    //desde la posicion que queremos eliminar, iteramos
    for(let i=pos;i<arr.length-1;i++)
    {
        tempArr[i] = arr[i+1]
    }
    //la longitud del array se debe reducir
    arr.pop()
    //copiamos el vector temporal
    for(i=0;i<arr.length;i++){
        arr[i] = tempArr[i]
    }
    return deletedValue;
}

let array = [2,34,4]
console.log('antes', array)
value = deleteItem(array, 1)
console.log('dp', array, value)