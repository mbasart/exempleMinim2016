const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema ({
    name: String,
    address: String,
    phones: [{id: String, phone: String}]
})

module.exports = mongoose.model('Student', StudentSchema);