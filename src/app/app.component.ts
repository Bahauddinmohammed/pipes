import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a=[1,2,3,4,5]//global variable
  constructor(){
 
  }
  // manu(){
  //  var result= this.a.push(6,8)
 
  //   console.log(result)
  // }



  title = 'myPipes';
  date=new Date('12-07-1998')
  salary=0.558884
  studentsDetails:any=[
    {name:'amar',course:'Angular',fee:8000,dob:new Date('06-27-1996')},
    {name:'ganesh',course:'Nodejs',fee:10000,dob:new Date('07-26-1995')},
    {name:'umesh',course:'React',fee:12000,dob:new Date('08-12-1996')},
    {name:'pooja',course:'Java',fee:9000,dob:new Date('12-22-1994')},
  ]

  
  // ngOnInit() {
   
}
