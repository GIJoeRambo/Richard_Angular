import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commandFormat'
})
export class CommandFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch(value){
      case 0:
        return 'Add new';
      case 1:
        return 'Details';
      case 2:
        return 'Edit';
      case 3:
        return 'Delete'
    }
  }

}
