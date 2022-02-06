// const name = "Abdulahi"
// const age = 22
// const display1 = function (ele) {
//     console.log(ele)
// }
// const display2 = function (ele) {
//     console.log("The total is ", ele)
// }
//
// let a = 22
// let b = 28
//
// function addAndDisplay(a, b, displayFunction) {
//     const sum = a + b
//     displayFunction(sum)
// }
//
// // addAndDisplay(22, 28 , display2)
// addAndDisplay(22, 28, function (ele) {
//     console.log("The total is ", ele)
// })
// addAndDisplay(22, 28, x => console.log("The total is ", x))


// function sum(a, b) {
//     return a + b
// }
//
// function display (ele){
//     console.log("The total is " , ele)
// }

// (a, b) =>  a + b
//
// const add = function (a, b) {
//     return a + b
// }
//
// const add2 = (a,b) => a + b
//
//
// console.log(add(2,4))
// console.log(add2(2,4))

const names = ['Abdulahi', "Zenieb", "Mohamed"]
// function display(a) {
//     console.log("the lement is " , a)
// }
// names.forEach(a => console.log(a))
// const found = names.find(a => a == "Zenieb")
// console.log(found)
//
const numbers = [1, 2, 3, 4, 5, 6, 7, 33, 5, 99, 1, 55]
// const odd = numbers.filter(a => a % 2 == 1)
// console.log(odd)
//
// const FilteredOddSquaredDisplayed = numbers
//     .filter(a => a % 2 == 1)
//     .map(a => a ** 2)
//     .forEach(a => console.log(a))
//
//
// const sum = numbers.reduce((a, b) => a + b)
// console.log("sum is " , sum)
// const aofArrays = [numbers, [numbers, [numbers]]]
// console.log(aofArrays)
// const flat = aofArrays.flat(Infinity)
// console.log(flat)
// // console.log(aofArrays.reduce((a, b) => a + b))

const student1 = {
    name : "Ali",
    age : 99,
    gender : "Male",
    grade : 55
}

const student2 = {
    name : "Abdulahi",
    age : 11,
    gender : "Male",
    grade : 99
}


const students = []
students.push(student1)
students.push(student2)

const student = students.reduce((a,b) => a.grade < b.grade ? a : b)
console.log(student)
//
// student.grade = 99
// console.log(student)
// console.log(student.age)
//
import  promptSync from 'prompt-sync'
const prompt = promptSync()
const name = prompt("What is your name?")
console.log(name)
//
//
//
//
