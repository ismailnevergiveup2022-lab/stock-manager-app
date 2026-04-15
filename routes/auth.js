const express = require('express');
const router = express.Router();

// Mock user database
tlet users = [];

// User registration route
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Check if the user already exists
    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }
    // Register the new user
    const newUser = { username, password };  // In a real app, make sure to hash the password
    users.push(newUser);
    res.status(201).json({ message: 'User registered successfully' });
});

// User login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    // Check if user exists and password is correct
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful' });
});

module.exports = router;