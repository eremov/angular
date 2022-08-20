import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let hours = value / 60;
    let minutes;
    if (Number.isInteger(hours)) {
      return hours + ":00 hours"
    } else {
      hours = Math.trunc(hours);
      minutes = value % 60;
      return hours + ":" + minutes;
    }
  }

}
