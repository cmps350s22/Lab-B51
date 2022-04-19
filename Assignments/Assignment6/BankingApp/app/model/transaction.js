import mongoose from "mongoose";

const Schema = mongoose.Schema

const transactionSchema = new Schema({
    acctNo : {
        type : Schema.Types.ObjectId,
        ref : 'Account',
        required: [true, 'acctNo is a required field']
    },
    transType: {
        type: String,
        required: [true, 'transType is a required field'],
        enum: ['Withdraw', 'Deposit']
    },
    amount: {
        type: Number,
        required: [true, 'amount is a required field'],
        min: [0, 'amount can not be negative']
    }
})

export default mongoose.model('Transaction', transactionSchema)
