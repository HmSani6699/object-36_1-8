const person = {
    name: 'alia',
    age: 20,
    address: 'kholna',
}


for (const key in person) {
    const value = person[key]
    // console.log(key, value)
}

const entries = Object.entries(person);

// for (const value of entries) {
//     const [k, v] = value
//     console.log(k, v)
// }

for (const [key, value] of Object.entries(person)) {
    console.log(key, value)
}
