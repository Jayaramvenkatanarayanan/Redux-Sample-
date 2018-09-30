
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/sampleDB');

module.exports = {
   mongoose
};