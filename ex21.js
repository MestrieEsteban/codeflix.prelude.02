module.exports = function map(list, iterateCB)
{
    let arr = []

    for(let item of Object.entries(list))
    {
        const [key, value] = item
        const res = iterateCB(value)
        arr.push(res)

    }
    return arr
}