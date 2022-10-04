const express = require('express') ;
const router = express.Router() ;

const { PostsModel } = require('../models/postsModel')

// Création d'un callback pour remonter les erreurs ou afficher docs
router.get('/', (req, res) => {
    PostsModel.find((err, docs) => {
        // console.log(docs);
        if (!err) res.send(docs);
        else console.log("Error to get data :" + err);
    })
});

//  Méthode POST pour ajouter données
router.post('/', (req, res) => {
    console.log(req);
    const newRecord = new PostsModel({
        author: req.body.author,
        message: req.body.message
    });

    newRecord.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error creating new data :" + err);
    })
})

module.exports = router