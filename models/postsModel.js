const mongoose = require("mongoose");

// Création d'un modèle de base de donnée réutilisable
// La majuscule (P) est une convention
const PostsModel = mongoose.model(
    "node-api",
    {
        author: {
            type: String,
            require: true // active le champs
        },
        message: {
            type: String,
            require: true // active le champs
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    "posts"
);

module.exports = { PostsModel } ;