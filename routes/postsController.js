const express = require('express') ;
const router = express.Router() ;

const { PostsModel } = require('../models/postsModel')

// Création d'un callback pour remonter les erreurs ou afficher docs
router.get('/', (req, res) => {
    PostsModel.find((err, docs) => {
        console.log(docs);
    })
})

module.exports = router