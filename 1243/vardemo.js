var n = 1200;

for(var n= 12;n>=0;n--)
{
    console.log("n inside for : "+n);
}

console.log("n outside for : "+n);

if(true)
{
    n = 123;
    console.log('n inside if = '+n);
}

console.log('n outside if = '+n)