//   Создать объект car, добавить к нему свойство color со значением 'черный'
let car = {
    color: 'black',
    carPower: 245,
}

//Изменить свойство color объекта car на 'зеленый'
car.color = 'green'

// В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
car.power = function () {
    console.log('Лошадиных сил: ' + this.carPower)
}

car.power()

// На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок
const appleAmount = 2567
const pearAmount = 1452

function getAmountOfFruits(appleAmount, pearAmount) {
    return +appleAmount + +pearAmount
}

console.log('Всего приняли груш и яблок: ' + getAmountOfFruits(appleAmount, pearAmount))

// В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)
const userName = 'Gleb'

function verifyUser(userInputName) {
    if (userInputName === userName) {
        console.log('Привет ' + userInputName)
    } else {
        console.log('Извините, но такого имени нет')
    }
}

verifyUser('Gleb')

// Напишите функцию вычисления типа аргумента и вывод типа в консоль
function findTypeOf(argumentTypeToCheck) {
    return console.log('Тип введеного аргумента: ' + typeof(argumentTypeToCheck))
}

findTypeOf(userName)

// Напишите функцию, которая определяет является ли число простым или нет
function isPrimeNumber(valueToCheck) {
    for(let i = 2; i < valueToCheck; i++)
      if(valueToCheck % i === 0) return false
    return valueToCheck > 1
}

console.log(isPrimeNumber(1))