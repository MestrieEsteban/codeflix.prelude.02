const first         = require('./ex01')
const initial       = require('./ex02')
const last          = require('./ex03')
const rest          = require('./ex04')
const flatten       = require('./ex05')
const without       = require('./ex06')
const union         = require('./ex07')
const intersection  = require('./ex08')
const other         = require('./ex09')
const index         = require('./ex10')
const keys          = require('./ex12')
const values        = require('./ex13')
const pairs         = require('./ex14')
const invert        = require('./ex15')
const mapfunction   = require('./ex21')
//const omit         = require('./ex17')
const size          = require('./ex19')
const sample        = require('./ex20')



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

console.log('_____');

console.log(intersection([5,12,35,45,14,50], [35, 12 ,50], [45,35,1]))
console.log(intersection([5,12,35,45,14,50], [0, 1 ,2]))
console.log(intersection([5,12,35,45,14,50], [5, 14 ,35]))

console.log('_____');

console.log(other([5,12,35,45,14,50], [35, 12 ,5000, 5], [200,800,500]))
console.log(other([5,12,35,45,14,50], [45, 1 ,0, 50], [999]))

console.log('_____');

console.log(union([5,12,35,45,14,50], [35, 12 ,5000, 5], [200,800,500]))
console.log(union([5,12,35,45,14,50], [45, 1 ,0, 50], [999]))

console.log('_____');

console.log(index([5,12,35,45,14,50], 35))
console.log(index([5,12,35,45,14,50], 99))

console.log('_____');

console.log(keys({one: 1, two:2, three: 3}))

console.log('_____');

console.log(values({one: 1, two:2, three: 3}))

console.log('_____');

console.log(invert({one: 1, two:2, three: 3}))

console.log('_____');

console.log(pairs({un: 1, deux:2, trois: 3}))

console.log('_____');

console.log(mapfunction({un: 1, deux:2, trois: 3}, function(num, key){return num * 3}))

//console.log('_____');

//console.log(omit({name: 'moe', age:50, userid: 'moe1'}, 'userid'))
//console.log(omit({name: 'moe', age:50, userid: 'moe1'}, function(value, key, object){return _.isNumber(value)}))

console.log('_____');

console.log(size([30,20,15,20]))
console.log(size({name: 'moe', age:50, userid: 'moe1'}))

console.log('_____');

console.log(sample([1,2,3,4]))
console.log(sample([1,2,3,4], 3))
