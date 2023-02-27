// number 1
//object literal syntax
const student = {
    name: 'Sani',
    age: 19,
    address: 'pakunda'
}

// number 2
//object constructor 
const student1 = new Object()
student1.name = "Aalia";
student1.age = 20;
student1.address = "janina";
// console.log(student1)


//number 3
//function constructor
function Student2(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}
const output = new Student2('sani', 39, 'palunda');
// console.log(output)


//number 4
//object create
const student3 = {
    name: 'sani',
    age: 39,
    address: 'pakunda'
};
const result = Object.create(student3);
// console.log(result)
// console.log(result.name)

class Student4 {
    name = 'sani';
    age = 39;
    address = 'pakunda';
    constructor(subject) {
        this.subject = subject
    }
}

const fiveStudent = new Student4('arbi');
console.log(fiveStudent)