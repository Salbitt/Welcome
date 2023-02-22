const userLeft = true
const userWatching = true

function watchagain(callback,errorcallback)
{
    if(userLeft)
    {
        errorcallback({
            name:'User left',
            message:':('
        })
    }else if(userWatching)
    {
        callback({
            name:'User is watching',
            message:''
        })
    }
}