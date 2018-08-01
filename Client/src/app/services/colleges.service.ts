import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CollegesService {
    college:object;
    listeColleges: Array<object>;

    constructor(private http: HttpClient) {
        // Collège par défault en cas de non connexion avec la base
        this.college = {
            sameAs : "http://webetab.ac-bordeaux.fr/college-simin-palay/",
            name : "Simin Palay",
            rne: "0641391P",
            phoneCDI: 559811072,
            address :
            {
                "streetAddress" : "Chemin de confesse",
                "addressLocality" : "Lescar",
                "postalCode" : "64230"
            }
        };
        // Liste des collèges
        this.getColleges();
    }

    getColleges() {
        this.http.get<Array<Object>>('assets/modele/colleges.json').subscribe (
            data => {
                // console.log(data);
                this.listeColleges = data;
            }
        );
    }
}
