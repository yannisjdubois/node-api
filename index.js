const express = require('express') ;

// La fonction app reconnaitra toutes les informations de Express
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');

// Création d'une fonction middleware qui va surveiller les requests et les responses
// si le chemin est '/', il me dirige vers postsRoutes
app.use('/', postsRoutes);


// Se connecter au serveur
// écoute tout ce qui ce passe au port 5500
app.listen(5500, () => console.log('Server started: 5500'));