import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  selectedSubject: Subject;
  subject: Subject[];
  readonly URL_API = 'http://localhost:3000/api/todos';

  constructor(private http: HttpClient) { 
    this.selectedSubject = new Subject();
  }

  getSubjects() {
    return this.http.get(this.URL_API + '/subjects');
  }

  postSubject(subject: Subject) {
    return this.http.post(this.URL_API + '/subject', subject );
  }

  putStudent(subject: Subject) {
    return this.http.put(this.URL_API + `/subject/${subject._id}`, subject);
  }

  deleteSubject(_id: string) {
    return this.http.delete(this.URL_API + `/subject/${_id}`)
  }
}
