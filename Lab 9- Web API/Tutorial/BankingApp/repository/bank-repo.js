import fs from 'fs-extra'

class BankRepo {
    async getAccounts(acctType) {
        const accounts = await fs.readJson('./data/accounts.json')
        if (acctType)
            return accounts
                .filter(account => account.acctType == acctType)
        return accounts
    }
}

export default BankRepo
