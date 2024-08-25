import { Routes } from '@angular/router';
import { FinishComponent } from './pages/finish/finish.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayComponent } from './pages/play/play.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: '', component: HomeComponent},
    {path: 'play', component: PlayComponent},
    {path: 'play/:name', component: PlayComponent},
    {path: 'finish', component: FinishComponent}

];