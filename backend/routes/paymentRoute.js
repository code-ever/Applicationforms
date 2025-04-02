
const db = require("../models/db");
const express = require("express");
const { payment } = require('../contoller/controller');
const route = express.Router();

route.post('/', async (req, res) => {
    const { username, email, amount, transactionid } = req.body
    try {
        const save = await payment(username, email, amount, transactionid);
        if (save) {
            return res.status(200).json({ message: 'Payment successful' });
        } else {
            return res.status(500).json({ message: 'Failed to save payment' });
        }
    } catch (error) {
        console.error(error);  // Log the error for debugging purposes
        return res.status(500).json({ message: 'Something went wrong' });  
    }
})
