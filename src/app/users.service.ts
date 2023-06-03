import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getData(){
   let details=[
      {name:'mohammed',rollno:12345,designation:'software engineer'},
      {name:'mohammed',rollno:12345,designation:'software engineer'},
      {name:'mohammed',rollno:12345,designation:'software engineer'},
      {name:'mohammed',rollno:12345,designation:'software engineer'},
    ]
    return details

}
}
