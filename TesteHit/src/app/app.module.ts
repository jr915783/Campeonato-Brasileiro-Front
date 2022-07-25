import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaTimesComponent } from './tabela-times/tabela-times.component';
import { GridTimesComponent } from './grid-times/grid-times.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavComponent } from './shared/nav/nav/nav.component';
import { FooterComponent } from './shared/footer/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TabelaTimesComponent,
    GridTimesComponent,
    NavComponent,
    FooterComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ModalModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
