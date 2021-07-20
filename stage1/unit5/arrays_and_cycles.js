// Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма
let arrMovies = ['Shawshank Redemption', 'Green Mile', 'Lord of the Rings: The Return of the King', 'Interstellar', 'Forrest Gump']

for (let movie of arrMovies) {
    console.log(movie)
}

class Movie {
    constructor(name, year, genre){
        this.name = name,
        this.year = year,
        this.genre = genre
    }
}

// Доп. попытался создать POM like класс для объектов типа Movie и вывести их ключ - значения
let arrMoviesObject = [new Movie('Shawshank Redemption', 1994, 'drama'), 
                        new Movie('Lord of the Rings: The Return of the King', 2003, 'fantasy'),
                        new Movie('Green Mile', 2003, 'fantasy'),
                        new Movie('Interstellar', 2014, 'fantasy'),
                        new Movie('Forrest Gump', 1994, 'fantasy'),
]

for (let movieObject of arrMoviesObject) {
    console.log('Movie name: ' +  movieObject.name, 'Movie year: ' +  movieObject.year, 'Movie genre: ' +  movieObject.genre)
}

// Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
let arrСarMoanufacturers = ['Volvo', 'Tesla', 'Audi', 'Shkoda', 'Rols Roys']

let arrToSting = String(arrСarMoanufacturers) //тут так же можно заюзать метод Join() 
console.log(arrToSting + ' typeOf: ' + typeof(arrToSting))

let stringToArr = arrToSting.split(',')
console.log(stringToArr + ' typeOf: ' + Array.isArray(stringToArr))

// Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
let arrFamiliars = ['KANYE', 'LIONEL', 'KYLIE', 'HOWARD'] 

arrFamiliars = arrFamiliars.map(function(familiar) {
    return 'hello ' + familiar
})
console.log(arrFamiliars)

// Преобразовать числовой массив в Boolean
let arrNumbers = [3, 4, 4323, 23, 0, -2, 311222].map(number => Boolean(number))
console.log(arrNumbers)

// Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
let arrNumbersToSort = [1,6,7,8,3,4,5,6]
arrNumbersToSort.sort((a, b) => b - a)
console.log(arrNumbersToSort + ' test =>')

// Тут я пробую развенуть короткую запись сортировки и явно предоставить метод для сортировки с условиями 
let arrNumbersToSortAgain = [1,6,7,8,3,4,5,6]
function compareNumbers(a, b) {
    if (a < b) {
        return 1
    }
    if (a > b) {
        return -1
    }
    return 0
}

arrNumbersToSortAgain.sort(compareNumbers)
console.log(arrNumbersToSortAgain + ' test function')

// Тут я пробую сортировку с использованием map для повышения скорости O(n) больших массивов или массивов объектов 
let arrNumbersToSortWithMap = [1,6,7,8,3,4,5,6]

let mapped = arrNumbersToSortWithMap.map(function(el, i) {
    return { index: i, value: el };
    })

mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return -1 
  }
  if (a.value < b.value) {
    return 1 
  }
  return 0
})

let sortedResult = mapped.map(function(el) {
    return arrNumbersToSortWithMap[el.index]
})
console.log(sortedResult + ' test map')

// Пузырьковая сортировка, но наоборот :D 
let arrNumbersToSortBubble = [1,6,7,8,3,4,5,6]

function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false
    arr.forEach((item, index) => {
      if (item < arr[index + 1]) {
        let temp = item
        arr[index] = arr[index + 1]
        arr[index + 1] = temp
        swapped = true
      }
    })
  } while (swapped)
return arr
}

console.log(bubbleSort(arrNumbersToSortBubble) + ' test bubble')
  
// Отфильтровать массив [1,6,7,8,3,4,5,6] по значению > 3
let arrNumbersToFilter = [1,6,7,8,3,4,5,6].filter(item => item > 3)
console.log(arrNumbersToFilter + ' test filter > 3')

// Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу
let arrNumbersToFind = [1,6,7,8,3,4,5,6]

function getEleById(arr, ele) {
    arr.forEach((item, index) => {
        if (item === ele) {
            console.log('Found element ' + ele + ' with index = ' + index)
        }
    })
}

getEleById(arrNumbersToFind, 6)

// Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10
// while пример
let a = 20
console.log('while пример')

while (a > 10) {
    console.log(a)
    a--
}

//do-while пример
let b = 20
console.log('do-while пример')

do {
    console.log(b)
    b--
} while(b >= 10)

//for пример
let c = 20
console.log('for пример')

for (; c > 10; c--) {
    console.log(c)
}

// Реализовать цикл, который выводит в консоль простые числа
// Метод будет выводить простые числа от 2 до задного пользователем числа (сделал так что бы занять память при запуске)
let primeNumber = 100;
console.log('простые числа через метку')

nextPrime:
for (let i = 2; i <= primeNumber; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime
  }

  console.log(i)
}

// Реализовать цикл, который выводит в консоль нечетные числа
// Метод будет выводить четные числа от 2 до задного пользователем числа (сделал так что бы занять память при запуске)
let amountOfNumbers = 100 
console.log('нечетные числа через for')

for (let i = 2; i <= amountOfNumbers; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// Можно упростить и сделать без кондишена
let amountOfNumbersEasy = 100 
console.log('нечетные числа через for упрощенный вариант')

for (let i = 2; i <= amountOfNumbersEasy; i+=2) {
    console.log(i) 
}

// Тоже самое через while (за нейминг переменных извиняюсь)
let amountOfNumbersEasyWhile = 70
console.log('нечетные числа через while')

while (amountOfNumbersEasyWhile){
     console.log(amountOfNumbersEasyWhile)
     amountOfNumbersEasyWhile -= 2
}