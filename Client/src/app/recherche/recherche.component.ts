import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-recherche',
    templateUrl: './recherche.component.html',
    styleUrls: ['./recherche.component.css','../../assets/css/iThing_1.css']
})
export class RechercheComponent implements OnInit {
    titre: string;

    constructor(private serieService: SeriesService, private titleService: Title) {
        this.titleService.setTitle("Recherche");
        this.titre = "Liste des séries disponibles";
    }

    ngOnInit() {
    }

}
