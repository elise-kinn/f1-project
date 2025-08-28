const  express = require('express')
const app = express()
require('dotenv').config() //.env
const port = process.env.PORT

app.use(express.json()) // middleware parse jon

//Intégration des routes 

//Démarrage du serveur
app.listen(port, () => console.log('Serveur démarré sur http://localhost:3000'))