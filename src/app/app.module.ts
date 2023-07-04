import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TobeyMaguireComponent } from './tobey-maguire/tobey-maguire.component';
import { AndrewGarfieldComponent } from './andrew-garfield/andrew-garfield.component';
import { TomHollandComponent } from './tom-holland/tom-holland.component';
import { FormsModule } from '@angular/forms';
import { SpiderHomeComponent } from './spider-home/spider-home.component';
import { AndrewGarfield2Component } from './andrew-garfield2/andrew-garfield2.component';
import { TobeyMaguire2Component } from './tobey-maguire2/tobey-maguire2.component';
import { TobeyMaguire3Component } from './tobey-maguire3/tobey-maguire3.component';
import { TomHolland2Component } from './tom-holland2/tom-holland2.component';
import { TomHolland3Component } from './tom-holland3/tom-holland3.component';
import { MilesMoralesComponent } from './miles-morales/miles-morales.component';
import { MilesMorales2Component } from './miles-morales2/miles-morales2.component';

@NgModule({
  declarations: [
    AppComponent,
    TobeyMaguireComponent,
    AndrewGarfieldComponent,
    TomHollandComponent,
    SpiderHomeComponent,
    AndrewGarfield2Component,
    TobeyMaguire2Component,
    TobeyMaguire3Component,
    TomHolland2Component,
    TomHolland3Component,
    MilesMoralesComponent,
    MilesMorales2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
