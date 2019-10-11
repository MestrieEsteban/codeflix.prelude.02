module.exports = function size(list)
{   
     var key, count = 0;

    for (key in list) {
        if (list.hasOwnProperty(key))
            count++;
    }
return count
}