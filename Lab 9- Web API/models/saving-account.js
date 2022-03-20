let BankAccount = require('./bank-account')

class SavingAccount extends BankAccount {
    constructor(accountNo, acctType, balance, minimumBalance) {
        super(accountNo, acctType, balance);
        this.minimumBalance = minimumBalance;
    }

    addBenefit(benefitRate) {
        this.balance *= (1 + benefitRate);
        //console.log(`Balance after benefit ${this.balance}`);
    }

    toString() {
        return `${super.toString()} Minimum Balance ${this.minimumBalance}`;
    }
}

module.exports = SavingAccount;