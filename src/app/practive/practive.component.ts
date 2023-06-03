import { Component,OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-practive',
  templateUrl: './practive.component.html',
  styleUrls: ['./practive.component.css']
})
export class PractiveComponent implements OnInit {
constructor(private user:UsersService,private http:HttpService){

}
mydata=[];
mydetails:any=[];
ngOnInit(){
 this.get()
 this.getdetails()
}
get(){
  this.mydata=this.user.getData()
}
getdetails(){
  return this.http.getdata().subscribe((res)=>{
    console.log(res)
    this.mydetails= res;
    console.log(this.mydetails)
  })
}
}
