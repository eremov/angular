import {Pipe, PipeTransform} from '@angular/core';
import {formatDate} from "@angular/common";

@Pipe({
  name: 'creationDate'
})
export class CreationDatePipe implements PipeTransform {

  transform(value: string): string {
    const dateValues = value.split('/')
    const dateValue = new Date(dateValues[1] + '-' + dateValues[0] + '-' + dateValues[2]);
    return formatDate(dateValue, 'dd.MM.YYYY', 'en_US')
  }

}
