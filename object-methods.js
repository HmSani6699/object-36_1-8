const person = {
    name: 'rakib',
    age: 20,
    address: function () {
        console.log(this.name)
    },
    subject: function () {
        this.address()
    },
    fullName: function (lastname) {
        return this.name + lastname
    },
    setItem: function () {
        this.area = 'sander desh'
        this.baba = 'hero alom'
        this.ma = 'robban'
    }

}
// const name = person.address()
// const subject = person.subject()
// person.subject()
const fullName = person.fullName(' Mia')
// console.log(fullName)

const setItem = person.setItem()
console.log(person)
// console.log(subject)