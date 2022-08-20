import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringJoiner'
})
export class StringJoinerPipe implements PipeTransform {

  transform(value: string[], ...args: string[]): string {
    return value.join(args[0]);
  }

}
