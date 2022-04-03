import Account from '../model/account.js';
import Transaction from '../model/account-trans.js'
export default class AccountRepo {

    //Get account from accounts.json file
    async getAccounts(acctType) {

        if (acctType && acctType != 'All')
            return Account.find({acctType})
        return Account.find();
    }

    //Get account by accountNo
    async getAccount(accountNo) {

    }

    async addAccount(account) {
        return await Account.create(account);
    }

    async deleteAccount(accountNo) {
        try {
            const accounts = await this.getAccounts();
            const index = accounts.findIndex(acct => acct.accountNo == accountNo);
            if (index >= 0) {
                accounts.splice(index, 1);
                return await this.saveAccounts(accounts);
            }
        } catch (err) {
            throw err;
        }
    }

    async updateAccount(account) {
        try {
            const accounts = await this.getAccounts();
            const index = accounts.findIndex(acct => acct.accountNo == account.accountNo);
            if (index >= 0) {
                accounts[index] = account;
                return await this.saveAccounts(accounts);
            }

            return -1;
        } catch (err) {
            throw err;
        }
    }

    async sumBalance() {
        try {
            const accounts = await this.getAccounts();
            return accounts.reduce((sum, account) => sum + account.balance, 0);
        } catch (e) {
            throw err;
        }
    }

    async chargeFees() {
        try {
            const accounts = await this.getAccounts();
            for (const acct of accounts) {
                //console.log('acct instanceof CurrentAccount', acct instanceof CurrentAccount);
                if (acct instanceof CurrentAccount) {
                    acct.deductFee()
                }
            }
            await this.saveAccounts(accounts);
        } catch (err) {
            throw err;
        }
    }

    async distributeBenefits(benefitRate) {
        try {
            const accounts = await this.getAccounts();
            // Go through all the Saving accounts and distribute the benefit using a 5% benefit.
            // Should not use filter and map for this as this will NOT update the original array
            for (const acct of accounts) {
                //console.log('acct instanceof SavingAccount', acct instanceof SavingAccount);
                if (acct instanceof SavingAccount) {
                    acct.addBenefit(benefitRate);
                }
            }
            await this.saveAccounts(accounts);
        } catch (err) {
            throw err;
        }
    }

    //Save accounts to account.json file
    async saveAccounts(accounts) {
        return await fs.writeJson(this.accountsFilePath, accounts);
    }

    async addTransaction(transaction) {
        transaction.accountNo = parseInt(transaction.accountNo.toString());
        transaction.amount = parseInt(transaction.amount.toString());
        try {
            const accounts = await this.getAccounts();
            const account = accounts.find(account => account.accountNo == transaction.accountNo);
            if (transaction.transType == 'Deposit') {
                account.deposit(transaction.amount);
            } else {
                account.withdraw(transaction.amount);
            }
            await this.saveAccounts(accounts);
        } catch (err) {
            throw err;
        }
    }
}

