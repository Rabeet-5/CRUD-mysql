const db = require('../config/config');
const Customer = db.customers;
const bcrypt = require('bcrypt');
const token = require('jsonwebtoken');


const createCustomer = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Required all fields",
            });
        }

        const existingUser = await Customer.findOne({ where: { email } });

        if (existingUser) {
            return res.status(404).json({
                message: "User with this email already exists",
            });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Remove the 'id' field from the create method call
        await Customer.create({
            name,
            email,
            password: hashedPassword,
        });

        const KEY = 'MY_PRIVATE_KEY';
        const sendToken = token.sign({ email }, KEY, { expiresIn: "1h" });

        res.status(200).json({
            message: "Customer created successfully",
            sendToken,
        });
    } catch (err) {
        console.error('Error during customer creation:', err);
        res.status(500).json({
            message: "An error occurred while creating the customer",
        });
    }
};

module.exports = { createCustomer }

