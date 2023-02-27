const first = { a: 1, b: 2, c: 3 }
const second = { a: 1, c: 2, b: 3 }

function compareObject(first, second) {
    const firstObj = Object.keys(first);
    const secondObj = Object.keys(second);
    if (firstObj.length === secondObj.length) {
        for (const key of firstObj) {
            if (first[key] !== second[key]) {
                return false
            }
        }
        return true
    }
    else {
        return false
    }
}
// const output = compareObject(first, second);
// console.log(output)



// const num1 = [1, 2, 3, 4, 5];
// const num2 = [1, 2, 3, 4, 5];
// const num3 = num1

// if (num1 === num3) {
//     console.log('item is some')
// }
// else {
//     console.log('difference')
// }


const num1 = [1, 2, 3, 4, 5];
const num2 = [1, 2, 3, 4, 5];

function check(num1, num2) {
    for (let i = 0; i < num1.length; i++) {
        if (num1[i] !== num2[i]) {
            return false
        }
    }
    return true
}
const output = check(num1, num2);
console.log(output)

// function differenceArray(num1, num2) {
//     if (num1.length === num2.length) {
//         for (let i = 0; i < num1.length; i++) {
//             if (num1[i] !== num2[i]) {
//                 return false
//             }
//         }
//         return true
//     }
//     else {
//         return false
//     }
// }
// const result = differenceArray(num1, num2);
// console.log(result)