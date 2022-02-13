export class BankAccount {
    #accountNo; //create a private property
    constructor(balance) {
        this.#accountNo = (Math.random() * 10000).toFixed(0)
        this.balance = balance
    }

    getAccountNo() {
        return this.#accountNo
    }

    deposit(amount) {
        if (amount > 0)
            this.balance += amount
        else
            console.log('Amount needs to be bigger than 0')
    }

    withDraw(amount) {
        if (amount < this.balance)
            this.balance -= amount
        else
            console.log('You do not have enough balance to deduct from')
    }

    toString() {
        `Account No : ${this.#accountNo} Balance : ${this.balance}`
    }
}



