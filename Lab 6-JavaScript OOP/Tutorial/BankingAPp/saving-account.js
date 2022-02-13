import {BankAccount} from "./bank-account.js";

export class SavingAccount extends BankAccount {
    constructor(balance, minBalance) {
        super(balance);
        this.minBalance = minBalance
    }

    distributeBenefit(benefitPercentage) {
        this.balance += this.balance * benefitPercentage
    }

    toString() {
        return `SavingAccount : ${super.toString()} MinBalance = ${this.minBalance}`
    }
}