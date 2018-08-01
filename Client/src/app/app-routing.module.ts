
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RechercheComponent } from './recherche/recherche.component';
import { RequetesComponent } from './requetes/requetes.component';
import { SeriesComponent } from './series/series.component';
import { CreationSerieComponent } from './creationSerie/creationSerie.component';
import { ModifSerieComponent } from './modifSerie/modifSerie.component';
import { ParametresComponent } from './parametres/parametres.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthdocuGuard } from './guards/authdocu.guard';
import { AuthadminGuard } from './guards/authadmin.guard';

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'recherche', component: RechercheComponent},
    {path: 'requetes', component: RequetesComponent},
    {path: 'creationSerie', component: CreationSerieComponent},
    {path: 'series', component: SeriesComponent, canActivate: [AuthdocuGuard] }, //voir pour autoriser aussi docu!!
    {path: 'series/:idserie', component: ModifSerieComponent, canActivate: [AuthdocuGuard] },
    {path: 'utilisateurs', component: UtilisateursComponent, canActivate: [AuthadminGuard] },
    {path: 'statistiques', component: StatistiquesComponent},
    {path: 'parametres', component: ParametresComponent},
    {path: '**', component: Erreur404Component}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }

