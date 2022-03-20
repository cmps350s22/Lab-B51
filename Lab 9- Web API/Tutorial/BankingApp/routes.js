import express from 'express'
import BankService from "./services/bank-service.js";

const bankService = new BankService()

const router = express.Router()

router.route('/api/accounts')
    .get(bankService.getAccounts)

export default router
