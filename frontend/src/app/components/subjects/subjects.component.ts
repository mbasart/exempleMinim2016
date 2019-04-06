import { Component, OnInit } from '@angular/core';

import { SubjectService } from '../../services/subject.service';
import { NgForm } from '@angular/forms';
import { Subject } from 'src/app/models/subject';

declare var M: any;

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
  providers: [SubjectService]
})
export class SubjectsComponent implements OnInit {

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.getSubjects();
  }

  addStudent(form: NgForm) {
    if(form.value._id){
      this.subjectService.putStudent(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Alumna afegit correctament'});
        this.getSubjects();
      })
    } else{
      this.subjectService.postSubject(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Assignatura creada correctament'});
        this.getSubjects();
      })
    }
  }

  getSubjects() {
    this.subjectService.getSubjects()
    .subscribe(res =>{
      this.subjectService.subject = res as Subject[];
      console.log(res);
    })
  }

  editSubject(subject: Subject) {
    this.subjectService.selectedSubject = subject;
  }

  resetForm(form?: NgForm) {
    if(form){
      form.reset();
      this.subjectService.selectedSubject = new Subject();
    }
  }

}
