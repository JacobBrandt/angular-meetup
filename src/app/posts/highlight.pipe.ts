import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, highlight: string): any {
    if (highlight !== null && highlight !== "") {
      return value.replace(new RegExp(highlight, 'g'), `<span class="highlight">${highlight}</span>`);
    }
    return value;
  }

}