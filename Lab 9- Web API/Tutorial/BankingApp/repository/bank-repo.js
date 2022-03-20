import fs from 'fs-extra'

const filepath = './data/accounts.json'

class BankRepo {
    async getAccounts(acctType) {
        const accounts = await fs.readJson(filepath)
        if (acctType)
            return accounts
                .filter(account => account.acctType == acctType)
        return accounts
    }

    async getAccount(accountNo) {
        const accounts = await fs.readJson(filepath)
        return accounts.find(account => account.accountNo == accountNo)
    }

    async deleteAccount(accountNo) {
        let accounts = await fs.readJson(filepath)
        accounts = accounts.filter(account => account.accountNo != accountNo)
        await fs.writeJson(filepath, accounts)
        return `successfully deleted`
    }

    async addAccount(account) {
        let accounts = await fs.readJson(filepath)
        accounts.push(account)
        await fs.writeJson(filepath, accounts)
        return `successfully added`
    }

    async updateAccount(account) {
        let accounts = await fs.readJson(filepath)
        const index = accounts.findIndex(account => account.accountNo === account.accountNo)
        accounts[index] = account
        await fs.writeJson(filepath, accounts)
        return `successfully updated`
    }
}

export default BankRepo
