export default class AccountService {

    getAccounts(req, res) {
        res.send(req.query.type)
    }
}
