const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('Conectado ao MongoDB');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);
        process.exit(1);
    }
};

module.exports = connectDB;