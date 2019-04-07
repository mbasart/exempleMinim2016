const express = require('express');
const router = express.Router();

const subject = require('../controllers/subject.controller');
const student = require('../controllers/student.controller');

router.get('/subjects', subject.getSubjects); //DEMANAT EXPLICIT AL EXEMPLE
router.get('/oneSubject/:id',subject.getOneSubject);
router.post('/subject', subject.createSubject);
router.put('/subject/:id',subject.editSubject); //DEMANAT EXPLICIT AL EXEMPLE 
router.delete('/subject/:id', subject.deleteSubject); //pel minim del exemple no es demanat (crec que no funciona)

router.get('/students', student.getStudent);
router.get('/oneStudent/:id',student.getOneStudent);
router.post('/student',student.createStudent);
router.delete('/student/:id',student.deleteStudent); //pel minim del exemple no es demanat 

module.exports = router;