import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    accountNo: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: [true, 'accountNo is a required field']
    },
    transType: {
        type: String,
        enum: ['Deposit', 'Withdraw'],
        required: [true, 'transType is a required field'],

    },
    amount: {
        type: Number,
        required: [true, 'amount is a required field'],
        min: [0, 'amount can not be negative']
    }
})

export default mongoose.model('Transaction', transactionSchema)
