import mongoose from 'mongoose';

// User Schema
const userSchema = new mongoose.Schema({
  no: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  descOfPayment: {
    type: String,
    required: true,
  },
  bankAcc: {
    type: String,
    required: true,
  },
  invoiceNo: {
    type: Number,
    required: true,
  },
  preparedBy: {
    type: String,
    required: true,
  },
  accounting: {
    type: String,
    required: true,
  },
  approvedBy: {
    type: String,
    required: true,
  },
  expenditureClass: {
    type: String,
    
  },
  expenditureSubclass: {
    type: String,
    
  }
}, { timestamps: true });

const userModel = mongoose.model('User', userSchema);

export default userModel;
