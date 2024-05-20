import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any[] | null, text: string = '', field: string = 'title'): any[] {
    if (!value) {
      return [];
    }

    if (text === '') {
      return value.slice(0, 20);
    }

    text = text.toLowerCase();

    return value.filter(item => {
      return item[field].toLowerCase().includes(text);
    }).slice(0, 20)
  }

}
