const first         = require('./ex01')
const initial       = require('./ex02')
const last          = require('./ex03')
const rest          = require('./ex04')
const flatten       = require('./ex05')
const without       = require('./ex06')


console.log('_____');

console.log(first([5,4,3,2,1]))
console.log(first([54,24,73,22,10], 3))
console.log(first([45,94,378,782,145], 5))

console.log('_____');

console.log(initial([5,4,3,2,1]))
console.log(initial([54,24,73,22,10], 3))
console.log(initial([45,94,378,782,145], 2))

console.log('_____');

console.log(last([5,4,3,2,1]))
console.log(last([54,24,73,22,10], 3))
console.log(last([45,94,378,782,145], 2))

console.log('_____');

console.log(rest([5,4,3,2,1]))
console.log(rest([54,24,73,22,10], 3))
console.log(rest([45,94,378,782,145], 2))

console.log('_____');

console.log(flatten([1,[2],[3,[[4]]]]))

console.log('_____');

console.log(without([5,12,35,45,14,50], 35, 12 ,50))
console.log(without([5,12,35,45,14,50], 0, 1 ,2))
console.log(without([5,12,35,45,14,50], 5, 14 ,35))