const baseUrl = '/api/accounts'

class AccountRepo {
    //returns all the accounts depending on the type the user selected
    async getAccounts(acctType) {
        const url = `http://localhost:5000/api/accounts/?type=${acctType}`
        const accounts = await fetch(url)
        return accounts.json()
    }

    async deleteAccount(accountNo) {

    }

    async addAccount(account) {

    }

    async updateAccount(account) {

    }

    async addTrans(trans) {
        
    }
}

export default new AccountRepo()
