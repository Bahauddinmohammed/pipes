import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  searchItem:any
  date=new Date('01-12-1992')
studentsDetails=[
  {name:'umesh',course:'angular',fee:5000,dob:new Date('02-12-1998')},
  {name:'ganesh',course:'angular',fee:5000,dob:new Date('05-12-1997')},
  {name:'amar',course:'angular',fee:5000,dob:new Date('02-12-1995')},
  {name:'mohammed',course:'angular',fee:5000,dob:new Date('12-12-1998')},
]
add(){
  this.studentsDetails.push({name:'pooja',course:'angular',fee:5000,dob:new Date('06-12-1968')})
}
}
