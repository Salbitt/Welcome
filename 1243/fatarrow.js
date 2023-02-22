var fact = (n)=>{
    if(n==0 || n==1)
        return 1;
    return n*fact(n-1);
}
console.log(fact(4))
var sum = (a,b)=>a+b
console.log('sum of 2 and 12 = '+sum(2,12))