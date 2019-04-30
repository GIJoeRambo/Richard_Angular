import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orgFormat'
})
export class OrgFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch(value){
      case 1:
        return "CENTRAL AUCKLAND BRANCH";
        break;
      case 2:
        return "EPSOM BRANCH";
        break;
      case 3:
        return "HENDERSON BRANCH";
        break;
      case 4:
        return "NORTH SHORE BRANCH";
        break;
      case 5:
        return "AMA Pakuranga";
        break;
      case 6:
        return "AUCKLAND CITY BRANCH";
        break;
      case 7:
        return "EAST AUCKLAND BRANCHS";
        break;
      }
    }

}
