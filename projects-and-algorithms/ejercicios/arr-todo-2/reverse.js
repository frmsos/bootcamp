const reverse = arr => {
    let tempvar;
    let j = arr.length - 1;
    //tenemos dos indices, i que avanza hacia delante y j que viene desde atras
    //por ello es necesario solo recorrer hasta la mitad del arr.
    for(let i =0; i< arr.length/2; i++){
        tempvar = arr[i];
        arr[i] = arr[j];
        arr[j] = tempvar;
        j--;
    
    }
    return(arr)
}
let arr = [12,23,34,45,56]
console.log(reverse(arr))