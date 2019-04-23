import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderFormat'
})
export class GenderFormatPipe implements PipeTransform {

  transform(value: any): any {
    if(value == 0){
      return 'Female';
    }
    if(value == 1){
      return 'Male';
    }
    else{
      return 'Undefined';
    }
  }

}
