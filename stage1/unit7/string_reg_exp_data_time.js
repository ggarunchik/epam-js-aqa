// Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'
const string = 'ahb acb aeb aeeb adcb axeb'
let result = string.match(/a.b/g)
console.log(result)

// Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
const newString = '2+3 223 2223'
let newResult = newString.match(/2\+3/g)
console.log(newResult)

// Получить день, месяц и год текущей даты и по отдельности вывести в консоль
let currentDate = new Date()
let dd = String(currentDate.getDate())
let mm = String(currentDate.getMonth() + 1)
let yyyy = currentDate.getFullYear()

currentDate = mm + '/' + dd + '/' + yyyy
console.log(currentDate)
