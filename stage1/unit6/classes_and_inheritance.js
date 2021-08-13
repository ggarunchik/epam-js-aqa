// Создать 2 объекта: animal и cat, объект animal добавить свойство move, объект cat должен наследовать свойство move
class Animal {
    constructor(name) {
        this.speed = 0
        this.name = name
    }

    move(speed) {
        this.speed = speed
        console.log(`${this.name} is moving with speed ${this.speed}`)
    }
}

class Cat extends Animal {
    constructor (name, colour) {
        super(name)
        this.colour = colour
    }
}

let myCat = new Cat('Jojo', 'Black')
myCat.move(34)

// Тут решил попробовать прототипное наследование
let animalProto = {
    speed: 0,
    moveProto(newSpeed) {
        this.speed = newSpeed
        console.log(`moving with speed ${this.speed}`)
    }
  }
  
  let catProto = {
    __proto__: animalProto
  };

  catProto.moveProto(43)
