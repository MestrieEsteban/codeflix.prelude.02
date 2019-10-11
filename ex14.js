module.exports = function pairs(obj)
{
    let finish = [] 
    for (const elt of Object.entries(obj)){finish.push(elt)}
    return finish

}