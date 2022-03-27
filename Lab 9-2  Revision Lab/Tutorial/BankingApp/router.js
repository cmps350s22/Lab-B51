import express from "express";
import AccountService from "./service/account-service.js";
const accountService = new AccountService()

const router = express.Router();

router.route('/accounts')
    .get(accountService.getAccounts)

export default router

