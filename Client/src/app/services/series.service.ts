import { Injectable }    from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { SerieModele } from './../modele/seriemodele';
import { EditionModele } from './../modele/editionmodele';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  edition: EditionModele;
  listeEditions : Array<object>;
  listeEditeurs : Array<object>;
  listeLangues  : Array<string>;
  //listeColleges: Array<object>;

  constructor(private http:HttpClient) {
    this.edition = 
    {
      title: "Les Fourberies de Scapin",
      author: "Molière",
      publisher: 0,
      collection: 0,
      language: "Français",
      publishedDate: "2016-04-13T12:00:00Z",
      pages: 144,
      cover: "https://images-na.ssl-images-amazon.com/images/I/51JW7IBS-YL._SX345_BO1,204,203,200_.jpg",
      ISBN: 9782013949675,
      };
      // this.listeSeries=[];
      
      this.getEditeurs();
      //this.getColleges();
   }

   getEditions(){
     this.http.get<Array<EditionModele>>('assets/modele/series.json').subscribe( //subscribe =asynchrone pour récupérer les données
       data => { //fonction fléchée pour rester dans le contexte asynchrone de la requete
         console.log("GET SERIES ", data);
         this.listeEditions = data;
         this.getLangues();
       }
    );
    }
  
    getEditeurs(){
      this.http.get<Array<EditionModele>>('assets/modele/editeurs.json').subscribe(
        (data) => {
          console.log("GET EDITEURS ",data);
          this.listeEditeurs = data;
          
        }
      );
      this.getEditions();
    }

    // Trier les langues
    getLangues(){
      this.listeLangues=[];
      for(let l of this.listeEditions){
        if(this.listeLangues.indexOf(l['language']) == -1){
          this.listeLangues.push(l['language']);
        }
      }
      console.log("language : ",this.listeLangues);
    }

    // getColleges(){
    //   this.http.get<Array<EditionModele>>('assets/modele/series.json').subscribe(
    //     (data) => {
    //       //toutes les valeurs de "language"
    //       let tousColleges = [];
    //       for (let i=0; i<data.length; i++){
    //         for (let j=0; j<data.length; j++){
    //         tousColleges.push(data[i].series[j].college);
    //         }
    //       }
    //       //les valeurs de "language" mais uniques
    //       this.listeColleges = tousColleges.filter((langue, i, tableau) => tableau.indexOf(langue) === i);
    //       console.log("liste des collèges uniques:",this.listeColleges);
    //       this.getSeries();
    //     });
    // }
}
