module.exports = function sample(list, n = 1)
{
    let finish
    let arr = []
    let random
    if(n === 1)
    {
        random = Math.floor(Math.random() * list.length)
        finish = list[random]
    }
    else
    {
        while(n > 0)
        {
            random = Math.floor(Math.random() * list.length)
            arr.push(list[random])
            
            n--
        }
        finish = arr
    }
    return finish
}