const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,

    useUnifiedTopology: true,

}).then(() => {
    console.log(`connection successfull to ${DB}`);
}).catch((err) => console.log(`No connection` + err));
