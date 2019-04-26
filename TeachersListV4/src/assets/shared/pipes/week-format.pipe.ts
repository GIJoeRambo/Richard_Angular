import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekFormat'
})
export class WeekFormatPipe implements PipeTransform {

  transform(value: any): any {
    switch(value){
      case 1:
        return "Monday";
        break;
      case 2:
        return "Tuesday";
        break;
      case 3:
        return "Wednsday";
        break;
      case 4:
        return "Thursday";
        break;
      case 5:
        return "Friday";
        break;
      case 6:
        return "Satday";
        break;
      case 7:
        return "Sunday";
        break;
    }
  }

}
