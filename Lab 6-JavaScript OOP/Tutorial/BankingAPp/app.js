// import {BankAccount} from "./bank-account.js";
//
// const bankAccount = new BankAccount(1000)
// console.log(bankAccount)
// const content =`
//     Account No is ${bankAccount.getAccountNo()}
//     Balance : ${bankAccount.balance}
//     --------------------------------
//
// `
// console.log(content)


const students = [
    {
        name : "Hadiyah",
        grade : 99
    },
    {
        name : "Zahra",
        grade : 99
    },
    {
        name : "Abdulahi",
        grade: 50
    }
]
//display
students.forEach(a =>  console.log(a))
console.log(students.map(a => a.name))
console.log(students.filter(a => a.grade%2==0))
console.log(students.find(a => a.name =='kKKKK'))

// students.find()
// students.reduce()


// function display(a) {
//     console.log(a)
// }
// function maximum(a , b) {
//     if(a > b)
//         return a;
//     else
//         return b
// }

// (a , b) => a > b ? a : b

// a =>  console.log(a)






