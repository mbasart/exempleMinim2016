const Student = require('../models/student');

const studentCtrl = {};

studentCtrl.getStudent = async (req,res) => {
    const student = await Student.find();
    res.json(student);

}

studentCtrl.getOneStudent = async(req, res) => {
    const student = await Student.findById(req.params.id);
    res.json(student);
}

studentCtrl.createStudent = async (req,res)=> {
    const student = new Student(req.body);
    await student.save();
    res.json(student);
}

studentCtrl.deleteStudent = async(req,res) => {
    await Student.findByIdAndRemove(req.params.id);
    res.json({status: 'Student deleted'});
}

module.exports = studentCtrl;