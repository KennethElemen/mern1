import mongoose from 'mongoose';

// Expenditure Schema
const expenditureSchema = new mongoose.Schema({
  expenditureClass: {
    type: String,
    required: true,
  },
  expenditureSubclass: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const expenditureModel = mongoose.models.Expenditure || mongoose.model('Expenditure', expenditureSchema);

export default expenditureModel;
