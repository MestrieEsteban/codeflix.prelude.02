module.exports = function Keys(obj)
{
    let arr = []
    for (const [key, value] of Object.entries(obj))
    {
        arr.push(key)
        
    }
    
    return arr

}