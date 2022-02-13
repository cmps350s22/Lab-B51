import {BankAccount} from "./bank-account.js";

export class CurrentAccount extends BankAccount {
    constructor(balance, monthlyFee) {
        super(balance);
        this.monthlyFee = monthlyFee
    }

    deductFee(monthlyFee) {
        if (monthlyFee > 0 && this.balance > monthlyFee)
            this.balance -= monthlyFee
        else
            console.log(`You do not have enough balance`)
    }

    toString() {
        return `SavingAccount : ${super.toString()} MinBalance = ${this.minBalance}`
    }
}