import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { SeriesService }     from '../services/series.service'

@Component({
  selector    : 'app-modifSerie',
  templateUrl : './modifSerie.component.html',
  styleUrls   : ['./modifSerie.component.css']
})

export class ModifSerieComponent implements OnInit {
  serie : object ={};

  constructor(private routeParams : ActivatedRoute, public listeSeries : SeriesService) { }

  ngOnInit() {
    this.routeParams.params.subscribe(
      params => {
        console.log(params);
        this.serie = this.listeSeries.listeEditions[+params['idserie']];
        console.log("console : ", this.serie);
      }
    );
  }
}
