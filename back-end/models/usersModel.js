const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        maxlength: 20, 
        minlenght: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 100
    },
    password: {
        type: String,
        required: true,
        maxlength: 255
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    user_points: {
        type: Number,
        default: 0
    }
    }, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" } // gère created_at et updated_at automatiquement
})

// middleware hash password
userSchema.pre('save', async function (next){ // pre() --> s'exécute automatiquement avant que l'utilisateur soit enregistré dans la BDD
    if(!this.isModified('password')) return next() // Vérification si le mot de passe a été modifié., évite de hasher un mot de passe déjà haché. si non modifié --> next()

    try {
        const salt = await bcrypt.genSalt(12) // génération d'un sel cryptographique avec complexité de 12
        this.password = await bcrypt.hash(this.password, salt) // hashage en utilisant le sel + remplacement du mot de passe
        next() // Traitement fini
    } catch (error) {
        next(err) //Si erreur, transmission de l'erreur
    }
})

module.exports = mongoose.model("Users", userSchema)