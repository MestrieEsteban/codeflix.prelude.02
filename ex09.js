module.exports = function difference(array, ...others)
{
    let present
    const newTab = []
    for(other of others)
    {
        for(val of other) 
        {
            array.includes(val) ? present = true : present = false
            if(present === false){newTab.push(val)}
        }
    }

    return newTab
    
 
}