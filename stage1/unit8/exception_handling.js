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

try {
    let c = x / y
    if (c == Infinity || c ==  Nan) {
        throw new Error ()
    }
} catch (e) {
    console.log('Hа ноль делить нельзя' + e.stack)
}