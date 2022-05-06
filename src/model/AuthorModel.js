const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:user123@project1.cfkyt.mongodb.net/Library?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;