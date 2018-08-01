import { Component, OnInit } from '@angular/core';
import { SeriesService } from './../services/series.service';
import { Title } from '@angular/platform-browser';
import { CollegesService } from '../services/colleges.service';
import { FiltreSeriesPipe } from './filtreSeries.pipe';
import { FiltreNiveauxPipe } from './filtreSeries.pipe';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css',  '../../assets/css/iThing_1.css']
})
export class SeriesComponent implements OnInit {
  title:string;
  titre:string;

  constructor(private collegesService: CollegesService, public seriesService:SeriesService, private titleService: Title) {
    this.titleService.setTitle("Recherche");
    this.titre = "Liste des séries disponibles";
  }

  ngOnInit() { }

}
