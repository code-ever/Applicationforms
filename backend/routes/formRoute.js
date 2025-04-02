const db = require("../models/db");
const express = require("express");
const { Emailexist,applicationform } = require('../contoller/controller');
const route = express.Router();

route.post('/', async (req, res) => {
    const { programm, username, email, firstname, middlename, faculty, department, regNo } = req.body;

    // Check if all required fields are provided
    if (!programm || !username || !email || !firstname || !faculty || !department ) {
        return res.status(400).json({ message: 'Please provide the necessary information' });
    }

    try {
        // Check if email already exists
        const user = await Emailexist(email);
        if (user) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Save the data if no issues
        const save = await applicationform(programm, username, email, firstname, middlename, faculty, department, regNo);
        if (save) {
            return res.status(200).json({ message: 'Registration successful' });
        } else {
            return res.status(500).json({ message: 'Failed to save application' });
        }
    } catch (error) {
        console.error(error);  // Log the error for debugging purposes
        return res.status(500).json({ message: 'Something went wrong' });
    }
});

module.exports = route;
