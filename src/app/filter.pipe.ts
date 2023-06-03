import { OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})

export class FilterPipe implements PipeTransform{

  transform(value:any, args:string): any {
     if(args===undefined)
     {
      return value
     }
     else{
      return value.filter(fun1)
      function fun1(x:any){
         let res= x.name.toLowerCase()
        return res.includes(args.toLocaleLowerCase())
      }
     }
  }


   
 
  
  
}

