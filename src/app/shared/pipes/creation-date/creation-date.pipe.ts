import { Pipe, PipeTransform } from '@angular/core';
import {formatDate} from "@angular/common";

@Pipe({
  name: 'creationDate'
})
export class CreationDatePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
      return formatDate(value, 'dd.MM.YYYY', 'en_US')
  }

}
