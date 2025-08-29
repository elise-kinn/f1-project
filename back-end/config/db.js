require('dotenv').config()

const mongoose = require('mongoose')
const dbURI = process.env.DBURI

mongoose.connect(dbURI)
.then(() => console.log("MongoDB connexion nailed ! :)"))
.catch(err => console.error("MongoDB connexion failed :( : ", err))

module.exports = mongoose.connexion