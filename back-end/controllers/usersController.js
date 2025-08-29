const Users = require('../models/usersModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    const { username, password, password2, email } = req.body

    try {
        const userEmail = await Users.findOne({ email })
        if(userEmail) return res.status(400).json({ message: "exsiting email"})

        const userUsername = await Users.findOne({ username })
        if(userUsername) return res.status(400).json({ message: "exsiting username"})

            
        if(password !== password2) return res.status(400).json({ message: "unmatched pw"})

        const newUser = new Users ({ username, password, email })
        await newUser.save()
        res.status(201).json({ message: "user created" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}