const db = require('../models/db');
//register student
async function Emailexist(email) {
    const query = 'SELECT * FROM forms WHERE email=?';
    try {
        const [result] = await db.execute(query, [email])
        return result.length > 0 ? result[0] : null;
    } catch (error) {
        throw new Error(`Error checking email: ${error.message}`);
    }

}

async function applicationform(programm, username, email, firstname, middlename, faculty, department, regNo) {
    // Sanitize inputs: Replace undefined with null if necessary
    programm;
    username;
    email;
    firstname;
    middlename = middlename !== undefined ? middlename : null;
    faculty;
    department;
    regNo = regNo !== undefined ? regNo : null;

    const query = "INSERT INTO forms(programm, username, email, firstname, middlename, faculty, department, regNo) VALUES(?,?,?,?,?,?,?,?)";

    try {
        // Execute the query with sanitized parameters
        const [result] = await db.execute(query, [programm, username, email, firstname, middlename, faculty, department, regNo]);
        return result;
    } catch (error) {
        console.error('Failed to insert:', error);
        throw new Error('Failed to insert');
    }
}

//get user 

//payment

async function payment(username, email, amount, transationid) {
    const query = "INSERT INTO payments VALUES(?,?.?.?)";
    try {
        const [result] = db.execute(query, [username, email, amount, transationid])
        return result;
    } catch (error) {
        console.error('Failed to insert:', error);
        throw new Error('Failed to insert');
    }
}



module.exports = { Emailexist, applicationform, payment}