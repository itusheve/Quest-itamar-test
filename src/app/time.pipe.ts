import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let hours = Math.floor(value / 60);          
    let minutes = value % 60;
    return `${hours}h ${minutes}m`;
  }

}
