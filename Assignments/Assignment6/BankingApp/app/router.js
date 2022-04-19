//web services [routes]
//Reading
import express from 'express'
import accountService from "./sevice/account-service.js";

const router = express.Router()

router.route('/accounts')
    .get(accountService.getAccounts)
    .post(accountService.addAccount)
    .put(accountService.updateAccount)


router.route('/accounts/stats')
    .get(accountService.getStats)

router.route('/accounts/transactions')
    .get(accountService.getTransactions)

router.route('/accounts/:acctNo')
    .get(accountService.getAccount)
    .delete(accountService.deleteAccount)

router.route('/accounts/:acctNo/trans')
    .post(accountService.addTransaction)

export default router
