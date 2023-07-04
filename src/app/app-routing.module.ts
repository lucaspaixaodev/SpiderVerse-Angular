import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpiderHomeComponent } from './spider-home/spider-home.component';
import { TobeyMaguireComponent } from './tobey-maguire/tobey-maguire.component';
import { TobeyMaguire2Component } from './tobey-maguire2/tobey-maguire2.component';
import { TobeyMaguire3Component } from './tobey-maguire3/tobey-maguire3.component';
import { AndrewGarfieldComponent } from './andrew-garfield/andrew-garfield.component';
import { AndrewGarfield2Component } from './andrew-garfield2/andrew-garfield2.component';
import { TomHollandComponent } from './tom-holland/tom-holland.component';
import { TomHolland2Component } from './tom-holland2/tom-holland2.component';
import { TomHolland3Component } from './tom-holland3/tom-holland3.component';
import { MilesMoralesComponent } from './miles-morales/miles-morales.component';
import { MilesMorales2Component } from './miles-morales2/miles-morales2.component';

const routes: Routes = [
  {
    path: '',
    component: SpiderHomeComponent
  },
  {
    path: 'tobey-maguire',
    component: TobeyMaguireComponent
  },
  {
    path: 'tobey-maguire2',
    component: TobeyMaguire2Component
  },
  {
    path: 'tobey-maguire3',
    component: TobeyMaguire3Component
  },
  {
    path: 'andrew-garfield',
    component: AndrewGarfieldComponent
  },
  {
    path: 'andrew-garfield2',
    component: AndrewGarfield2Component
  },
  {
    path: 'tom-holland',
    component: TomHollandComponent
  },
  {
    path: 'tom-holland2',
    component: TomHolland2Component
  },
  {
    path: 'tom-holland3',
    component: TomHolland3Component
  },
  {
    path: 'miles-morales',
    component: MilesMoralesComponent
  },
  {
    path: 'miles-morales2',
    component: MilesMorales2Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
