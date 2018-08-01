import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtreDatalist'
})
export class FiltreDatalistPipe implements PipeTransform {

  public transform(value: any[], filtre?: string): any[] { 
    // Remove the duplicate elements
    return value.filter(v => {
      console.log("console du filtre : ",value, filtre);
      // return array.indexOf (el) == index;
    });
    // return uniqueArray;
  }
}

