import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'std'
})
export class StdPipe implements PipeTransform {

  transform(value:any): any {
   
    var cry=new Date().getFullYear();
    var doby=new Date(value).getFullYear()
    var res=cry-doby
    return res;
  }

}
