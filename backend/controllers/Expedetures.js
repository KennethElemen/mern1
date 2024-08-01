import expenditureModel from "../models/Voucher.js";

// Create Expenditure
const createExpenditure = async (req, res) => {
  try {
    const { expenditureNo, expenditureName, expenditureAmount, expenditureDate, expenditureAddress, paymentDescription, bankAccount, invoiceNumber, preparedBy, accountingDetails, approvedBy, expenditureClass, expenditureSubclass } = req.body;

    // Validate input
    if (!expenditureNo || !expenditureName || !expenditureAmount) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const newExpenditure = new expenditureModel({
      expenditureNo, expenditureName, expenditureAmount, expenditureDate, expenditureAddress, paymentDescription, bankAccount, invoiceNumber, preparedBy, accountingDetails, approvedBy, expenditureClass, expenditureSubclass
    });

    await newExpenditure.save();
    res.status(200).json({ success: true, message: "Expenditure Created Successfully.", newExpenditure });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Read Expenditures
const getExpenditures = async (req, res) => {
  try {
    const expenditures = await expenditureModel.find();

    if (expenditures.length === 0) {
      return res.status(404).json({ success: false, message: "No expenditures found" });
    }

    res.status(200).json({ success: true, expenditures });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Update Expenditure
const updateExpenditure = async (req, res) => {
  try {
    const expenditureId = req.params.id;

    if (!expenditureId) {
      return res.status(400).json({ success: false, message: "Expenditure ID is required" });
    }

    const updateExpenditure = await expenditureModel.findByIdAndUpdate(expenditureId, req.body, { new: true });

    if (!updateExpenditure) {
      return res.status(404).json({ success: false, message: 'Expenditure not found' });
    }

    res.status(200).json({ success: true, message: 'Expenditure updated successfully', updateExpenditure });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Delete Expenditure
const deleteExpenditure = async (req, res) => {
  try {
    const expenditureId = req.params.id;

    if (!expenditureId) {
      return res.status(400).json({ success: false, message: "Expenditure ID is required" });
    }

    const deleteExpenditure = await expenditureModel.findByIdAndDelete(expenditureId);

    if (!deleteExpenditure) {
      return res.status(404).json({ success: false, message: 'Expenditure not found' });
    }

    res.status(200).json({ success: true, message: 'Expenditure deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export { createExpenditure, getExpenditures, updateExpenditure, deleteExpenditure };
