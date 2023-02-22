class Person{
    constructor(name,age)
    {
        this.name = name
        this.age = age
    }

    printDetails()
    {
        console.log(`Name :${this.name} , Age:${this.age}`)
    }
}
class Student extends Person{
    constructor(name, age,id)
    {
        super(name,age);
        this.id = id;
    }
    printId()
    {
        console.log(`Id : ${this.id}`)
    }
}

const student = new Student('Jerry',12,2893)
student.printDetails();
student.printId();