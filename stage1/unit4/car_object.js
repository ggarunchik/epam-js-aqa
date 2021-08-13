// В целях тренировки пробую иной способ создания объекта из юнита4
class Car {
    constructor(model, color, carPower){
        this.model = model,
        this.color = color,
        this.carPower = carPower
    }
    power() {
        return this.carPower
    } 
}

let newCar = new Car('volvo', 'black', 245)
newCar.color = 'Green'
console.log(newCar)
console.log(newCar.power())
