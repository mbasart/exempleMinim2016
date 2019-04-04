const Subject = require('../models/subject');

const subjectCtrl = {};

subjectCtrl.getSubjects = async (req,res)=>{
    const subjects = await Subject.find() //amb el find ja veiem totes les assignatures i els seus detalls 
        .populate({path: 'students'}); //faig servir el populate per veure directament el detall de l'alumna
    res.json(subjects);
}

subjectCtrl.getOneSubject = async(req,res) => {
    const subject = await Subject.findById(req.params.id);
    res.json(subject);
}

subjectCtrl.createSubject = async(req,res) => {
    const subject = new Subject({
        name: req.body.name,
        students: req.body.students
    });
    await subject.save();
    res.json('received');
}

subjectCtrl.editSubject = async(req,res) => {
    const {id} = req.params;
    const subject = {
        name: req.body.name,
        students: req.body.students
    }
    await Subject.findByIdAndUpdate(id, {$set: subject}, {new: true});
    res.json({status: 'Subject updated'});
}

subjectCtrl.deleteSubject = async(req,res) => {
    await ubject.findByIdAndRemove(req.params.id);
    res.json({status: 'subject deleted'});
}

module.exports = subjectCtrl;