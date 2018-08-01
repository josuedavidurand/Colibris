import { Pipe, PipeTransform } from '@angular/core';
import { SeriesService } from '../services/series.service';


@Pipe({
    name: 'filtreSeries'
})
export class FiltreSeriesPipe implements PipeTransform {

    transform(values: any[], filtre: string): any[] {
        if (!values || !values.length) return [];
        if (!filtre) return values;

        return values.filter(v => {
            // Filtre sur le titre
            if (v.title.toLowerCase().indexOf(filtre.toLowerCase()) >= 0 ||
                v.author.toLowerCase().indexOf(filtre.toLowerCase()) >= 0)
                return true;
            return false;
        });
    }
};

@Pipe({
    name: 'filtreEditions'
})
export class FiltreEditionsPipe implements PipeTransform {
    constructor(public seriesService: SeriesService) {

    }

    transform(values: any[], filtre: string): any[] {
        if (!values || !values.length) return [];
        if (!filtre) return values;

        return values.filter(v => {
            console.log("Valeur Filtre >>> ", filtre);
            console.log("Filtre Edition >>> ", v);
            console.log("Filtre Edition 2>>> ", this.seriesService.listeEditeurs[v.publisher].name);
            if (this.seriesService.listeEditeurs[v.publisher].name.indexOf(filtre) >= 0 ||
                this.seriesService.listeEditeurs[v.publisher].collection[0].indexOf(filtre) >= 0) {
                console.log("true");
                return true;
            }
            console.log("false");
            return false;
        });
    }
};

@Pipe({
    name: 'filtreLangues'
})
export class FiltreLanguesPipe implements PipeTransform {

    transform(values: any[], filtre: string): any[] {
        if (!values || !values.length) return [];
        if (!filtre) return values;

        return values.filter(v => {
            console.log("Valeur Filtre Langue >>> ", filtre);
            console.log("Filtre Langue >>> ", v);
            if (v.language.indexOf(filtre) >=0)
                {console.log("Langue TRUE");
                return true};
            return false;
        });
    }
};

@Pipe({
    name: 'filtreniveaux'
  })
  export class FiltreNiveauxPipe implements PipeTransform {
  
      transform(items: any, filter: any, filterItems: Array<any>, isAnd: boolean): any {
          console.log('Filtering ..');
          if (filter && Array.isArray(items) && filterItems) {
              let filterKeys = Object.keys(filter);
              let checkedItems = filterItems.filter(item => { return item.checked; });
              if (!checkedItems || checkedItems.length === 0) { return items; }
              if (isAnd) {
                  return items.filter(item =>
                      filterKeys.reduce((acc1, keyName) =>
                          (acc1 && checkedItems.reduce((acc2, checkedItem) => acc2 && new RegExp(item[keyName], 'gi').test(checkedItem.value) || checkedItem.value === "", true))
                          , true)
                  );
              } else {
                  return items.filter(item => {
                      return filterKeys.some((keyName) => {
                          return checkedItems.some((checkedItem) => {
                              return new RegExp(item[keyName], 'gi').test(checkedItem.value) || checkedItem.value === "";
                          });
                      });
                  });
              }
          } else {
              return items;
          }
      }
  }
  
  // Filtre les séries suivant leur nombre d'exemplaires
@Pipe({
    name: 'nbExemplairesSeriePipe'
})
export class ExemplairesSeriesPipe implements PipeTransform {

    transform(series: any[], nbExemplaires: number): any[] {
        if (!series || !series.length) return [];
        if (!nbExemplaires) return series;

        return series.filter(serie => {
            // Filtre sur le nombre d'exemplaires
            if (serie.quantite >= nbExemplaires)
                return true;
            return false;
        });
    }

}

// Filtre les éditions suivant le nombre d'exemplaires dans les séries de l'éditions
@Pipe({
    name: 'nbExemplairesEditionPipe'
})
export class ExemplaireseditionsPipe implements PipeTransform {

    transform(editions: any[], nbExemplaires: number): any[] {
        if (!editions || !editions.length) return [];
        if (!nbExemplaires) return editions;

        return editions.filter(edition => {
            for (let i = 0; i < edition.series.length; i++) {
                // Filtre sur le nombre d'exemplaires
                if (edition.series[i].quantite >= nbExemplaires)
                    return true;
                return false;
            }            
        });
    }

}

