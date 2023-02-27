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
const output = compareObject(first, second);
console.log(output)
