import AccountRepo from "../repository/account-repo.js";

const accountRepo = new AccountRepo()

export default class AccountService {
    async getAccounts(req, res) {
        try {
            const accounts = await accountRepo.getAccounts(req.query.type)
            res.json(accounts)
        } catch (e) {
            res.send(e)
        }
    }

    async getAccount(req, res) {
        try {
            const account = await accountRepo
                .getAccount(req.params.acctNo)
            res.json(account)
        } catch (e) {
            res.send(e)
        }
    }

    async deleteAccount(req, res) {
        try {
            const response = await accountRepo.deleteAccount(req.params.acctNo)
            res.send(response)
        }catch (e) {
            res.send(e)
        }
    }

    async addAccounts(req, res) {
        try {
            const account =  req.body
            const response = await accountRepo.addAccount(account)
            res.json(response)
        }catch (e) {
            res.send(e)
        }
    }

    async addTransaction(req, res) {
        try {
            const accountNo = req.params.acctNo
            const response = await accountRepo.addTransaction(req.body, accountNo)
            res.json(response)
        } catch (e) {
            res.send(e)
        }
    }
}
