//creamos la clase ninja
class Ninja{
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
//probamos
ninja2 = new Ninja('peter', 10);
ninja2.showStats();
ninja2.drinkSake();
ninja2.showStats();