
async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject("arguments must be of type number")
    }
    return a + b
}

function asyncSubtract(a , b) {
    if (typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject("arguments must be of type number")
    }
    return a - b
}

const sumResult = asyncSum(50,33)
const subtractResult = asyncSubtract(50,33)

Promise.all( [sumResult, subtractResult]).then(results => {
    results.forEach((item)=> console.log(item))
}).catch(err => {
    console.log(err)
})