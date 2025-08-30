const Users = require('../models/usersModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    const { username, password, password2, email, rgpd } = req.body

    try {
        // vérifications des informations de l'utilisateur
        const userEmail = await Users.findOne({ email })
        if(userEmail) return res.status(400).json({ message: "existing email"})

        const userUsername = await Users.findOne({ username })
        if(userUsername) return res.status(400).json({ message: "existing username"})

        
        if(password !== password2) return res.status(400).json({ message: "unmatched pw"})

        if(!username | !password | !email) return res.status(400).json({ message: "empty field"})

        if(!rgpd) return res.status(400).json({ message: "empty rgpd"})

        const newUser = new Users ({ username, password, email })
        await newUser.save()

        // création de token avec .sign(), contenant id et username (PAS DE DONNEES SENSIBES), la clé secrète (PAS EN DUR) et la durée avant expiration
        const token = jwt.sign(
            {
                id: newUser._id, 
                username: newUser.username, 
                email: newUser.email
            }, 
            process.env.SECRET,
            { expiresIn: "1h"}
        )

        res.status(201).json({ 
            message: "user created",
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email, 
            },
            token
        });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}