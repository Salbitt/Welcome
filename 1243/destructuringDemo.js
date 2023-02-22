arr = ['square','circle','rectangle','diamond','triangle']

const[w] = arr; //w takes first value of array
console.log(w)
const[x,y,z,...other] = arr
console.log(x,y,z,other)
const[a,,b,,...rest] = arr
console.log(a,b,rest)

const Box={
    width:12.86,
    height:30.98,
    appearance:{
        color:'red',
        size:'medium'
    }
}

const{width,height,...app} = Box
console.log('Width of the box : '+width)
console.log('Height of the box: '+height)
console.log(app)

