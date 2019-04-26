import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderFormat'
})
export class GenderFormatPipe implements PipeTransform {

  transform(value?: any, args?: any): any {
    if(value == 0){
      return "Female";
    }
    else if(value == 1){
      return "Male";
    }
    else{
      return "Not Defined";
    }
  }

}
