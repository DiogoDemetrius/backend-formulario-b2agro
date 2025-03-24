const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    utf: {
        type: String,
        required: true,
        enum: ['DF', 'GO', 'MG']
    },
    areaAtuacao: {
        type: [String],
        required: true
    }
})

const User = mongoose.model('User', UserSchema, 'landingpage');

module.exports = User;