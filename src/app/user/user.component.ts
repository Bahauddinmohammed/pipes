import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  data:any
  salary=25000
  studentsDetails=[
    {name:'amar',course:'Angular',fee:8000,dob:new Date('06-27-1996')},
    {name:'ganesh',course:'Nodejs',fee:10000,dob:new Date('07-26-1995')},
    {name:'umesh',course:'React',fee:12000,dob:new Date('08-12-1996')},
    {name:'pooja',course:'Java',fee:9000,dob:new Date('12-22-1994')},
  ]
  add(){
   return this.studentsDetails.push({name:'Mohammed',course:'Angular',fee:8000,dob:new Date('12-07-1998')},);
  }
}
