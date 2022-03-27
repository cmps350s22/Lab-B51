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
}
