import {Pipe, PipeTransform} from '@angular/core';
import {formatDate} from "@angular/common";

@Pipe({
  name: 'creationDate'
})
export class CreationDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const dateValue = new Date(value);
    return formatDate(dateValue, 'dd.MM.YYYY', 'en_US')
  }

}
