import {CurrentAccount} from "./current-account.js";
import {SavingAccount} from "./saving-account.js";

const bankAccounts = []

for (let i = 0; i < 10; i++) {
    const balance = Math.random() * 10000

    if (i % 2 == 0) {
        const monthlyFee = Math.random() * 200
        bankAccounts.push(new CurrentAccount(balance, monthlyFee))
    } else {
        const minBalance = Math.random() * 1000
        bankAccounts.push(new SavingAccount(balance, minBalance))
    }
}

const bank = new Bank(bankAccounts)
console.log(bank.sumBalance())
console.log(bankAccounts)
document.querySelector(".")
const html = bankAccounts.forEach(s => tableRow(a))

function tableRow(s){
    return`
        <td>${s.balance} </td>
        <td> </td>
        <td> </td>
    `
}
// const bankAccount = new BankAccount(1000)
// console.log(bankAccount)
// const content =`
//     Account No is ${bankAccount.getAccountNo()}
//     Balance : ${bankAccount.balance}
//     --------------------------------
//
// `
// console.log(content)
//
//
// const students = [
//     {
//         name : "Hadiyah",
//         grade : 99
//     },
//     {
//         name : "Zahra",
//         grade : 99
//     },
//     {
//         name : "Abdulahi",
//         grade: 50
//     }
// ]
//
// console.log(JSON.stringify(students))
// console.log(students)
// //display
// students.forEach(a =>  console.log(a))
// console.log(students.map(a => a.name))
// console.log(students.filter(a => a.grade%2==0))
// console.log(students.find(a => a.name =='kKKKK'))

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






