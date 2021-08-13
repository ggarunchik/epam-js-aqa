let stringValue = '5';
let numberValue = 59;
let booleanValue = true;

console.log('\nВыполнить сложение различных типов(string+boolean, string+number, number+boolean)');
const sumStringAndBoolean = stringValue + booleanValue;
const sumStringAndNumber = stringValue + numberValue;
const sumNumberAndBoolean = numberValue + booleanValue;

console.log('string('+ stringValue + ') + boolean:('+ booleanValue + ') ' + sumStringAndBoolean) 
console.log('string('+ stringValue + ') + number:('+ numberValue + ') ' + sumStringAndNumber)
console.log('number('+ numberValue + ') + boolean:('+ booleanValue + ') ' + sumNumberAndBoolean)

console.log('\nВыполнить умножение различных типов(string * boolean, string * number, number * boolean)');
const mulStringAndBoolean = stringValue * booleanValue;
const mulStringAndNumber = stringValue * numberValue;
const mulNumberAndBoolean = numberValue * booleanValue;

console.log('string('+ stringValue + ') * boolean:('+ booleanValue + ') ' + mulStringAndBoolean)
console.log('string('+ stringValue + ') * number:('+ numberValue + ') ' + mulStringAndNumber)
console.log('number('+ numberValue + ') * boolean:('+ booleanValue + ') ' + mulNumberAndBoolean)

console.log('\nВыполнить деление различных типов(string/boolean, string/number, number/Boolean)')
const divStringAndBoolean = stringValue / booleanValue;
const divStringAndNumber = stringValue / numberValue;
const divNumberAndBoolean = numberValue / booleanValue;

console.log('string('+ stringValue + ') / boolean:('+ booleanValue + ') ' + divStringAndBoolean)
console.log('string('+ stringValue + ') / number:('+ numberValue + ') ' + divStringAndNumber)
console.log('number('+ numberValue + ') / boolean:('+ booleanValue + ') ' + divNumberAndBoolean)

console.log('\nВыполнить явное преобразование(number, string, boolean)');
const stringToNumber = Number(stringValue);
const numberToString = String(numberValue);
const numberToBoolean = Boolean(numberValue);

console.log('Start is: ' + stringValue) 
console.log('Old typeof is: ' + typeof(stringValue))
console.log('New typeof is: ' + typeof(stringToNumber))

console.log('Start is: ' + numberValue)
console.log('Old typeof is: ' + typeof(numberValue))
console.log('New typeof is: ' + typeof(numberToString))

console.log('Start is: ' + numberValue)
console.log('Old typeof is: ' + typeof(numberValue))
console.log('New typeof is: ' + typeof(numberToBoolean))
