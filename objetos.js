class Persona {
    static id = 0;

    #ahorros;

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.#ahorros = 0;
        this.id = Persona.getId();
    }

    static getId() {
        Persona.id++
        return Persona.id
    }

    trabajar(){
        this.#ahorros += 100000;
        console.log(`${this.nombre} fue responsablemente a trabajar. Sus ahorros son de $${this.#ahorros} pesos.`);
    }

    comer(){
        this.#ahorros -= 1000;
        console.log(`${this.nombre} fue a comer. Sus ahorros bajaron a $${this.#ahorros} pesos.`);
    }

    salirdefiesta(salidas){
        this.gastosFiesta = 10000*salidas;
        this.#ahorros -= this.gastosFiesta;
        console.log(`${this.nombre} decidio salir de fiesta ${salidas} veces. Gasto un total de $${this.gastosFiesta}. Sus ahorros bajaron abruptamente a $${this.#ahorros} pesos.`)
    }


    printInfo(){
        console.log(this.#infoPersona);
        this.#ahorros < 100000 ? console.log(`*******${this.nombre} culpa a la economia del pais.*******`) : console.log(`*******${this.nombre} ahorra responsablemente.*******`);
    }


    get #infoPersona() {
        return `=================================
        Id: ${this.id}
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        Ahorros: ${this.#ahorros}
=================================`
    }
}

const persona1 = new Persona('Romina',25);
const persona2 = new Persona('Damian',35);
const persona3 = new Persona('Daniela',22);

persona1.trabajar();
persona1.comer();
persona1.salirdefiesta(4);
persona1.printInfo();

persona2.trabajar();
persona2.comer();
persona2.comer();
persona2.salirdefiesta(3);
persona2.printInfo();

persona3.trabajar();
persona3.trabajar();
persona3.comer();
persona3.salirdefiesta(5);
persona3.printInfo();
