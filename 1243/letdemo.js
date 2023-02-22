let a= 1000;

//the let inside for-block is local to 'for' block only


for(let a = 10;a<=50;a=a+10)
{
    console.log("a inside for = "+a);
}

console.log("a outside for = "+a);

let b  = 100;

if(b)
{
    let b = 10;
    console.log('b inside if = '+b);
}

console.log('b outside if = '+b);