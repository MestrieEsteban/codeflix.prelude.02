// module.exports = function omit(obj, ...keys)
// {
//     const [firstOpts] = keys
    
    
//     const newObj = {}
    
//     if (typeof firstOpts === 'function') {
//         const callback = firstOpts
        
//         // with callback
//         for (const item of Object.entries(obj)) {
//             const [key, value] = item
//             if (callback(value, key) === true) {
//                 newObj[key] = obj[key]
//             }
//         }
//     } else {
//         // with keys
//         for (const item of Object.entries(obj)) {            
//             console.log(obj[item]);
//             if (item !== firstOpts) {
                
//             newObj = obj[item]
//           }
//         }
//       }
//       return newObj
    
// }