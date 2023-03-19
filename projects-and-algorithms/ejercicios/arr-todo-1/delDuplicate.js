const delDuplicate = (arr) =>{
    //declaracion de elementos auxiliares
    let tempArr = [];
    let lastVal = null;
    let j=0;
    for(let i=0;i<arr.length;i++){
        //la primera iteracion se realiza si o si, luego se almacena el valor anterior para ir comparando
        if( lastVal !== arr[i]){
            tempArr[j] = arr[i];
            lastVal = arr[i];
            j++;
        }
    }
    return tempArr;
}
let vectorOrdenado = ['Acosta', 'Acosta', 'Bareiro', 'Bizz', 'Contrera'];
let arry =  delDuplicate(vectorOrdenado);
console.log('dp', arry)