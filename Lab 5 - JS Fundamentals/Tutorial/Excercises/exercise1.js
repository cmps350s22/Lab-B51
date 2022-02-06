// console.log("Whatever you want to display on the console")
//
// const name = "Abdulahi"
// let age = 55
// age = 88
// console.log(name, age)
//
// for (let i = 0; i < 10; i++) console.log(i)
//
//
// let i = 0
// while (i < 20) {
//     console.log(i)
//     i++
// }
//
// if(name == "Abdulahi")
//     console.log("you are the instructor")
// else if(name == "ali")
//     console.log("you are the manager")
// else
//     console.log("You are a student")

// for (const name of names)
//     console.log(name)
const names = ["Fatima", "dana", "hanan", "zenieh"]

/*
console.log(names)
names.push("Zenaib")
console.log("After push" , names)
names.unshift("Hadiyah")
console.log("After unshift" , names)
names.pop()
console.log("After pop" , names)
names.shift()
console.log("After shift" , names)

names.splice(2, 2)
console.log("After splice(2,2)" , names)

for (const [index, name] of names.entries()) {
    console.log(index, name)
}
*/
//
// function add(a, b){
//     return a + b
// }
//
// function add( a,  b){
//     return a + b
// }
//
// console.log(add(2,4))
// console.log(add("Abdulahi", " Hassen"))

let i = 0
let numbers = ""
while (i <= 100) {
    if (i % 2 != 0) {
        numbers += i + ','
    }
    i++;
}
console.log(numbers)

let cars = ["Saab", "Volvo", "BMW"];
//beginning
cars.unshift('Mercedez')
cars.push('Toyota - LandCruiser')
console.log(cars)
console.log(cars.splice(2,1))
console.log(cars)

function displayArray(array) {
    for (const [index, arrayElement] of array.entries()) {
        console.log(index, arrayElement)
    }
}

displayArray(cars)

displayArray(cars.sort())