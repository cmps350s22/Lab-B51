import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const options = {
    toJSON: {
        virtuals: true
    }
}

const accountSchema = new Schema({
    acctType: {
        type: String,
        enum: ['Current', 'Saving'],
        required: [true, 'acctType is a required field']
    },
    balance: {
        type: Number,
        required: [true, 'balance is a required field'],
        min: [0, 'balance can not be negative']
    }
}, options)

accountSchema.virtual('acctNo').get(function () {
    return this._id
})
accountSchema.virtual('profit').get(function () {
    if (this.acctType == 'Saving')
        return this.balance * 0.05
    return 0
})
accountSchema.virtual('minBalance').get(function () {
    if (this.acctType == 'Saving')
        return 1000
})
export default mongoose.model('Account', accountSchema)
