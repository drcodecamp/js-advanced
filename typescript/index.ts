let age: number = 35 // using basic `number` type
age = 33
//age = 'dasd' // Throw error

let isDriving: boolean
isDriving = age > 5

let numArr: number[] = [10, 20, 30] // Allow only cells with number type inside

function logArr(arr: number[]): number {
    arr.forEach((item) => {
        console.log(item)
    })
    return arr[0]
}

logArr([10, 20, 30])

const res = logArr([10, 20, 30])

res.toString()

function magic(a: number, b: number): number {
    return a + b
}
