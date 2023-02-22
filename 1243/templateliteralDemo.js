let Ordername = 'Pizza'
let quantity = 4
let status = 'done'

let orderStatus = "Status of the order is : ";
orderStatus+=(status =='done')?'ready':'not ready'

let orderStatus2 = `Status of the order is : ${(status=='done')?'ready':'not ready'}`

let description = 'I have ordered '+quantity+' '+Ordername+' two minutes ago. '+orderStatus
console.log(description)

function time()
{
    return '2 mins ago'
}

let description2 = `I have ordered ${quantity} ${Ordername} about ${time()} from "New Place". ${orderStatus2}`
console.log(description2)

