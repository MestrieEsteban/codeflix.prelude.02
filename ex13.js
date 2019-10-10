module.exports = function values(obj)
{
    let arr = []
    for (const [key, value] of Object.entries(obj))
    {
        arr.push(value)
        
    }
    
    return arr

}