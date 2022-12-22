// console.log(hello);                                   
// var hello = 'world';                                 

// //1
// //after hoisting
// se predice un resultado undefined
// var hello;
// console.log(hello);                                   
// var hello = 'world';                                 


//2
//after hoisiting
//se predice que imprima magnet
var needle = 'haystack';
function test(){
    
        var needle = 'magnet';
        console.log(needle);
    }
test();

//3
//after hoisting
// se predice que imprima  super cool ya que nunca se llama a la funcion print
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


//4
//after hoisting
//se predice que imprima primero chicken, luego half-chicken
var food = 'chicken';
function eat(){
        food = 'half-chicken';
        console.log(food);
        var food = 'gone';
    }
console.log(food);
eat();



//5
//after hoisting
// //error de sintaxis
// var mean = function() {
//         food = "chicken";
//         console.log(food);
//         var food = "fish";
//         console.log(food);
//     }
// mean();
// console.log(food);

// console.log(food);

//6
//after hositing
//
//primero undefined por que se hace hoisting solo de la declaracion, luego rock, randb y disco
function rewind() {
        genre = "rock";
        console.log(genre);
        var genre = "r&b";
        console.log(genre);
    }
var genre;
console.log(genre);
var genre = "disco";
rewind();
console.log(genre);

//7
//after hoisting
//se imprime san jose, seattle, burbank y san jose
dojo = "san jose";
function learn() {
        dojo = "seattle";
        console.log(dojo);
        var dojo = "burbank";
        console.log(dojo);
    }
console.log(dojo);
learn();
console.log(dojo);

//8
//error, se quiere asignar valor a una variable constante
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
 const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
