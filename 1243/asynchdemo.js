//synchronous
// console.log("CVR")
// console.log("IT")
// calculate()
// console.log('A Section')
// function calculate()
// {
//     i = 0
//     sum = 0
//     for (i = 0;i<1000000000;i++)
//     {
//         sum+=i
//     }
//     return sum
// }

//asynchronous

// console.log('CVR')
// console.log('IT')
// setTimeout(()=>{
//     console.log('hello');
// },5000
// )

// console.log('Welcome')

//aysnhronous to synchronous
console.log('Cvr')
console.log('It')
setTimeout(()=>{calculate(),10000})

console.log('Welcome')

function calculate()
{
    i = 0
    sum = 0
    for (i = 0;i<1000000000;i++)
    {
        sum+=i
    }
    console.log( sum)
}