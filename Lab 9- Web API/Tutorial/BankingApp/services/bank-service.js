import BankRepo from "../repository/bank-repo.js";
const bankRepo = new BankRepo();

class BankService {
    async getAccounts(req, res) {
        const accounts = await bankRepo.getAccounts()
        res.json(accounts)
    }
}

export default BankService
