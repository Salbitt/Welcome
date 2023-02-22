// function* MyGenerator(){
//     yield 1;
//     yield 2;
//     console.log('This is the second line')
//     yield 3;
// }

// console.log(MyGenerator().next())

// const genobj = MyGenerator()

// console.log(genobj.next())
// console.log('This is a line')
// console.log(genobj.next())
// console.log(genobj.next())
// console.log(genobj.next())
// console.log(genobj.next())
// console.log(genobj.next())

// function* sampleGenerator(){
//     yield 'Apples'; //yield is a checkpoint or pause
//     yield 'Banana';
//     console.log('ok, this is the line after Banana');
//     yield 'Mango';
// }
// let sample  = sampleGenerator();
// console.log(sample.next());
// console.log(sample.next());
// console.log(sample.next());
// console.log(sample.next());

// console.log('---------------------');

function* getNextId(){
    let id = 0
    while(id<3)
    yield id++
}
let createUser = getNextId()

console.log(createUser.next().value);
console.log(createUser.next().value);
console.log(`Let's print remaining lines`)
console.log(createUser.next());
console.log(createUser.next());