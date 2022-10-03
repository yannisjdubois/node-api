const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/node-api",
    { useNewUrlParser: true, useUnifiedTopology: true},

    (err) => {
        // les accolades sont inutiles s'il y a une seul ligne dans le IF
        if (!err) console.log("Mongodb connected");
        else console.log("Connection error :" + err);
    }
)