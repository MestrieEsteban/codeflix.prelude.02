module.exports = function invert(obj)
{
    let arr = []
    newObject = {}
    
    for (const elt of Object.entries(obj))
    {
        const[value, key] = elt
        newObject[key] = value
        
    }
    
    return newObject
}