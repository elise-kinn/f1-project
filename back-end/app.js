const  express = require('express')
const cors = require('cors') // échange front/back sécurisé
const app = express()

require('dotenv').config() //.env
const port = process.env.PORT

app.use(cors({ origin: "http://localhost:5173" }))

const db = require('./config/db') // mongoDB import

app.use(express.json()) // middleware parse jon

//Intégration des routes 
const usersRoutes = require('./routes/usersRoutes')
app.use('/api/users', usersRoutes)

//Démarrage du serveur
app.listen(port, () => console.log('Serveur démarré sur http://localhost:3000'))