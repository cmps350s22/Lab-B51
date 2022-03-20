import BankRepo from "../repository/bank-repo.js";
const bankRepo = new BankRepo();

class BankService {

    async getAccounts(req, res) {
        const acctType = req.query.type
        const accounts = await bankRepo.getAccounts(acctType)
        res.json(accounts)
    }

    async getAccount(req, res) {
        const acctNo = req.params.acctNo
        const account = await bankRepo.getAccount(acctNo)
        res.json(account)
    }

    async deleteAccount(req, res) {
        const acctNo = req.params.acctNo
        const deletedAccount = await bankRepo.deleteAccount(acctNo)
        res.json(deletedAccount)

    }

    async addAccount(req, res) {
        const account = req.body
        const result = await bankRepo.addAccount(account)
        res.json(result)
    }

    async updateAccount(req, res) {
        const account = req.body
        const result = await bankRepo.updateAccount(account)
        res.json(result)
    }
}

export default BankService
