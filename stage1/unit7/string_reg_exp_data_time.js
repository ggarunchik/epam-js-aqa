// Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'
const string = 'ahb acb aeb aeeb adcb axeb'
const result = string.match(/a.b/g)
console.log(result)

// Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
const newString = '2+3 223 2223'
const newResult = newString.match(/2\+3/g)
console.log(newResult)

// Получить день, месяц и год текущей даты и по отдельности вывести в консоль
const currentDate = new Date()
console.log(currentDate.getDate())
console.log(currentDate.getMonth() + 1)
console.log(currentDate.getFullYear())