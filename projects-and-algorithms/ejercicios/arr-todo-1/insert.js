const insert = (arr, pos, val) =>{
    let tempArr = [];
    let i = 0;
    //copiamos de los valores del vector a la variable temporal
    for(let j=0;j<arr.length+1;j++)
    {
        //si coincide con la pos indica, insertamos el valor
        if(j === pos) {
            tempArr[j] = val
        }
        //sino coincide seguimos copianndo los valores
        else{
            tempArr[j] = array[i]
            i++;
        }
    }
    arr = tempArr
    return arr;
}


let array = [2,34,2]
console.log('antes', array)
array=insert(array,2,2334)
console.log('dp', array)