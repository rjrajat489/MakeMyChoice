class Person{
    constructor(name="Anonomus",age=0)
    {
        this.name=name;
        this.age=age;
    }
    gree(){
        return `HI ${this.name} is ${this.age} years old`;
    }
}
const x= new Person("Rajat",24);
console.log(x.gree());
const y= new Person();
console.log(y.gree());