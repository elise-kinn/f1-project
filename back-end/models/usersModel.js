const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        maxlength: 100
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
userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next()
    
    try {
        const salt = await bcrypt.genSalt(parseInt(12))
        this.password = await bcrypt.hash(this.password, salt)
    } catch (error) {
        next(err)
    }
})

module.exports = mongoose.model("Users", userSchema)