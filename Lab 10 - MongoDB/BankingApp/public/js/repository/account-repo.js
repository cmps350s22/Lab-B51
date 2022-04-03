const baseUrl = '/api/accounts'

class AccountRepo {
    //returns all the accounts depending on the type the user selected
    async getAccounts(acctType) {
        let url = '/api/accounts/';
        url = `${url}?type=${acctType}`;
        const response = await fetch(url);
        return response.json();
    }

    async deleteAccount(accountNo) {
        return await fetch(`/api/accounts/${accountNo}`, {method: 'delete'});
    }

    async addAccount(account) {
        return await fetch('/api/accounts',
            {
                method: 'POST',
                headers: {'Content-Type': "application/json",},
                body: JSON.stringify(account)
            });
    }

    async updateAccount(account) {
        return await fetch('/api/accounts',
            {
                method: 'PUT',
                headers: {'Content-Type': "application/json",},
                body: JSON.stringify(account)
            });
    }

    async addTrans(trans) {
        const url = `/api/accounts/${trans.acctNo}/trans`
        await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(trans)
        });
    }
}

export default new AccountRepo()