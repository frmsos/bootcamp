const removeSpaces = (str) =>{
    //utilizmamos el regex para remover los espacios
    str = str.replace(/\s/g, '');
    return str
}
let str = 'Pl ayTha tF u nkyM usi c';
str = removeSpaces(str)
console.log(str)
