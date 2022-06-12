class Traveler {
  constructor (name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }

  hunt () {
    return this.food += 2;
  };

  eat () {
    if (this.food === 0) {
      this.isHealthy = false;
    } else {
      this.food -= 1;
    }
  };
  
}

class Wagon {
  constructor (capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }

  getAvailableSeatCount () {
    let seat = this.capacity - this.passengers.length;
    if (seat < 0) {
      return 0
    } else {
      return seat
    }
  
  }

  join (traveler) {
    if (this.getAvailableSeatCount() > 0) {
      this.passengers.push(traveler);
    }
  
  }

  shouldQuarantine () {
    return this.passengers.some((traveler) => traveler.isHealthy === false);
  }

  totalFood () {
    return this.passengers.reduce((traveler1, traveler2) => {
      return traveler1 + traveler2.food
    }, 0)
  }

}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida, food = 3
juan.eat(); //food = 0
juan.eat(); //juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);