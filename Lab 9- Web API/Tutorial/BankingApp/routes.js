import express from 'express'
import BankService from "./services/bank-service.js";

const bankService = new BankService()

const router = express.Router()

router.route('/api/accounts')
    .get(bankService.getAccounts)
    .post(bankService.addAccount)
    .put(bankService.updateAccount)

router.route('/api/accounts/:acctNo')
    .get(bankService.getAccount)
    .delete(bankService.deleteAccount)

export default router
