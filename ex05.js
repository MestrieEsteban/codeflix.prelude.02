
 function flat(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
      const next = stack.pop();
      if (Array.isArray(next)) {
        stack.push(...next);
      } else {
        res.push(next);
      }
    }
    return res.reverse();
  }
module.exports = function flatten(array, shallow) 
 {
    return flat(array)
 }

 