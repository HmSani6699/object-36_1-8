const person = {
    name: 'alia',
    age: 20,
    address: 'kholna',
}

//access object keys 
const keys = Object.keys(person);
// console.log(keys)

//access object values
const values = Object.values(person);
// console.log(values)

//delete object property
// console.log(person);
// delete person.address
// console.log(person)

//object seal
/*
console.log(person)
Object.seal(person)
person.area = 'jani na';        //not alow to a new value
delete person.address           //no delete
person.address = 'amer bagan'   //update allow
console.log(person)
*/

//object freeze
/*
console.log(person)
Object.freeze(person);
person.name = 'jon'  //not allow
person.roll = 45;    //not allow
delete person.name   //not allow
console.log(person)
 */


//object entries
console.log(person)
const result = Object.entries(person);
console.log(result)

