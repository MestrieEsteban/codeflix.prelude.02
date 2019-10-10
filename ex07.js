module.exports = function union(...arrays) 
 {
    let present
    const first_tab = arrays[0]
    for(array of arrays)
    {
        for(val of array) 
        {
            first_tab.includes(val) ? present = true : present = false
            if(present === false){first_tab.push(val)}
        }
    }

    return first_tab
    
 }


