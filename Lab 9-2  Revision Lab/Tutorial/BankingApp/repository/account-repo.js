import fs from 'fs-extra';
import path from 'path';

import SavingAccount from '../models/saving-account.js';
import CurrentAccount from '../models/current-account.js';

export default class AccountRepo {

    constructor() {
        this.accountsFilePath = path.join(path.resolve(), 'data/accounts.json');
    }

    //Get account from accounts.json file
    async getAccounts(acctType) {
        let accounts = await fs.readJson(this.accountsFilePath);

        if (acctType && acctType != 'All') accounts = accounts.filter(acct => acct.acctType === acctType);

        //This will add Account methods back to the deserialized account.
        for (const acct of accounts) {
            if (acct.acctType === "Saving")
                Object.setPrototypeOf(acct, CurrentAccount.prototype);
            else
                Object.setPrototypeOf(acct, SavingAccount.prototype);
        }
        return accounts;
    }

    //Get account by accountNo
    async getAccount(accountNo) {
        try {
            const accounts = await this.getAccounts();
            return accounts.find(account => account.accountNo == accountNo);
        } catch (err) {
            throw err;
        }
    }

    async addAccount(account) {
        account.accountNo = Date.now();
        account.balance = parseInt(account.balance.toString());
        if (account.acctType === 'Saving')
            account.minimumBalance = 1000;
        else
            account.monthlyFee = 15;

        try {
            const accounts = await this.getAccounts();
            accounts.push(account);
            return await this.saveAccounts(accounts);
        } catch (err) {
            console.log(err);
        }
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

