import express from "express";
import AccountService from "./service/account-service.js";

const accountService = new AccountService()

const router = express.Router();

router.route('/accounts')
    .get(accountService.getAccounts)

router.route('/accounts/:acctNo')
    .get(accountService.getAccount)
export default router

