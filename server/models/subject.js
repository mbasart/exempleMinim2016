const mongoose = require('mongoose');
const { Schema } = mongoose;

const subjectSchema = new Schema({
    name: {type: String, required: true},
    students: [{type: mongoose.Schema.Types.ObjectId, ref: 'Student'}]
})

module.exports = mongoose.model('Subject', subjectSchema);

