import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demos',
  pure:false
})
export class DemosPipe implements PipeTransform {

  transform(value:any, args:any): any {

    if(args===undefined){
      return value;
    }
    else{
     return value.filter(function(x:any){
     return x.name.startsWith(args.toLowerCase());

      })
    }
  }

}
