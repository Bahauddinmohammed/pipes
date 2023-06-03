import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  pure:false
})
export class AgePipe implements PipeTransform {

  transform(value:any): any {
    var cy=new Date().getFullYear();
    var dby=new Date(value).getFullYear();
    var age=cy-dby
    return age;
  }

}
