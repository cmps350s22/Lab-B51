import express from "express";
import AccountService from "./service/account-service.js";

const accountService = new AccountService()

const router = express.Router();

router.route('/accounts')
    .get(accountService.getAccounts)
    .post(accountService.addAccounts)

router.route('/accounts/:acctNo')
    .get(accountService.getAccount)
    .delete(accountService.deleteAccount)
export default router

