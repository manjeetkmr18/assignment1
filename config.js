const mongoose = require('mongoose');
const dburl = 'mongodb+srv://admin:admin@cluster0.wsunyml.mongodb.net/drivetest?retryWrites=true&w=majority';

function connect() {
    mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true });
    const connection = mongoose.connection;
    connection.on('error', console.error.bind(console, 'connection error:'));
    connection.once('open', function () {
        console.warn("Connected to database");
    });
}

module.exports = { connect };