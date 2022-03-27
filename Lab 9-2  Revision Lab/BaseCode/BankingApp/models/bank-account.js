export default class BankAccount {
    constructor(accountNo, acctType, balance) {
        this.accountNo = accountNo;
        this.acctType = acctType;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance < amount) throw 'Not enough balance';
        this.balance -= amount;
    }

    toString() {
        return `${this.acctType} Account #${this.accountNo} has ${this.balance} QR balance.`;
    }
}

