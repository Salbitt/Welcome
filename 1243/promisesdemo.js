let p = new Promise((resolve,reject)=>
{
    let a = 1+4
    if(a==3)
        resolve('Success')
    else
        reject('Failure')
})

p.then((message)=>{
    console.log(message+" is in the then")
}).catch((message)=>{
    console.log(message+" is in the catch")
})
