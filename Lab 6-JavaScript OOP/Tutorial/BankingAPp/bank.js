import {CurrentAccount} from "./current-account";

class Bank {
    constructor(account) {
        this.accounts = account
    }

    getAccount(accountNo) {
        return this.accounts.find(acc => acc.getAccountNo() == accountNo)
    }

    avgBalance() {
        return this.accounts.reduce((acc, curr)=> acc + curr.balance, 0)/accounts.length
    }
}

const accounts = [new CurrentAccount(1000),new CurrentAccount(200),new CurrentAccount(200) ]
let acc = 0

for (const curr of accounts) {
    acc+= curr.balance
}