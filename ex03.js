module.exports = function last(array, n = 1) 
 {
   return n == 1 ? array[array.length-1] : array.splice(-n)
}
