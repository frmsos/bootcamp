//creamos la clase ninja
class ninja{
    //atributos
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3; // valor predeterminado
        this.strength = 3; //valor predeterminado
    }
    //metodos
    sayName() {
        console.log("El nombre del Ninja es:  ", this.name);
    }
    showStats(){
        console.log(`Nombre: ${this.name}. Fuerza: ${this.strength}. Velocidad: ${this.speed}. Salud: ${this.health}.`);
    }
    drinkSake(){
        this.health +=10;
    }
}
//creamos la clase heredera
class Sensei extends ninja{
    constructor(name, health, wisdom){
        super(name);
        ///valores predeterminados
        this.wisdom = 10; 
        this.speed = 10;
        this.health = 200;
        this.strength = 10;

    }

    speakWisdom(){
        this.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses");
    }

}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();


