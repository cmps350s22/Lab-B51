class Bank {
    constructor(account) {
        this.accounts = account
    }

    getAccount(accountNo) {
        return this.accounts.find(acc => acc.getAccountNo() == accountNo)
    }

    avgBalance() {
        return this.sumBalance() / this.accounts.length
    }

    sumBalance() {
        return this.accounts.reduce((acc, curr) => acc + curr.balance, 0)
    }

    toJSON() {
        return JSON.stringify(this.accounts)
    }

    fromJson(accountJSON) {
        return JSON.parse(accountJSON)
    }
}


