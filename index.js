const express = require('express') ;

// La fonction app reconnaitra toutes les informations de Express
const app = express();
require('./models/dbConfig');


// Se connecter au serveur
// écoute tout ce qui ce passe au port 5500
app.listen(5500, () => console.log('Server started: 5500'));