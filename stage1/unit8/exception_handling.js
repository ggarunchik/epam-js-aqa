// В try catch конструкцию завернуть код: console.log(a), let a = 3. И вывести ошибку – ‘let перед использованием нужно объявить’. 
try {
    console.log(a)
    let a = 3 
} catch (e) {
    console.log('let перед использованием нужно объявить' + e.stack)
}

// При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'
let x = 1
let y = 0

if (!y) {
    throw new Error ('Hа ноль делить нельзя')
}

let result = x / y





