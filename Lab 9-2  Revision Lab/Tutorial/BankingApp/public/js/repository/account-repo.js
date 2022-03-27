const baseUrl = '/api/accounts'

class AccountRepo {
    //returns all the accounts depending on the type the user selected
    async getAccounts(acctType) {
        const url = `/api/accounts/?type=${acctType}`
        const accounts = await fetch(url)
        return accounts.json()
    }

    async getAccount(accountNo) {
        const url = `/api/accounts/${accountNo}`
        const account = await fetch(url)
        return account.json()
    }

    async deleteAccount(accountNo) {
        const url = `/api/accounts/${accountNo}`
        return await fetch(url, {method: 'DELETE'})
    }

    async addAccount(account) {
        const url = `/api/accounts`
        return await fetch(url, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(account)
        })

    }

    async updateAccount(account) {

    }

    async addTrans(trans) {

    }
}

export default new AccountRepo()
