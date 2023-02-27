const person = {
    name: 'rakib',
    age: 20,
    address: function () {
        console.log(this.name)
    },
    subject: function () {
        this.address()
    },
    fullName: function (amount) {
        return this.name
    },
    setItem: function (salary) {
        this.area = 'sander desh'
        this.baba = 'hero alom'
        this.ma = 'robban'
        this.salary = salary
    }
}

const person1 = {
    name: 'Rakib',
    age: 19,
}
const output = person.fullName.call(person1);
//console.log(output);
const output1 = person.setItem.apply(person1, [500]);
// console.log(output1);

const output2 = person.fullName.bind(person1)
console.log(output2())