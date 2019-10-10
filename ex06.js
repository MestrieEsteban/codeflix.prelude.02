module.exports = function without(arr, ...values) 
 {
     finish_array = []
    for(let value of arr)
    {
        if(!values.includes(value))
        {
            finish_array.push(value)
        }
    }
    return finish_array
    
    
 }


