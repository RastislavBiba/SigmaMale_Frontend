import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { OsobaFormularComponent } from './osoba-formular/osoba-formular.component';
import { OsobyZoznamComponent } from './osoby-zoznam/osoby-zoznam.component';
import { OsobaStrankaComponent } from './osoba-stranka/osoba-stranka.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { KnihaFormularComponent } from './kniha-formular/kniha-formular.component';
import {KnihaStrankaComponent} from "./kniha-stranka/kniha-stranka.component";
import { VypozickaFormularComponent } from './vypozicka-formular/vypozicka-formular.component';
import { VypozickyZoznamComponent } from './vypozicky-zoznam/vypozicky-zoznam.component';
import { VypozickyStrankaComponent } from './vypozicky-stranka/vypozicky-stranka.component';

@NgModule({
  declarations: [
    AppComponent,
    OsobaFormularComponent,
    OsobyZoznamComponent,
    OsobaStrankaComponent,
    KnihaFormularComponent,
    KnihaStrankaComponent,
    VypozickaFormularComponent,
    VypozickyZoznamComponent,
    VypozickyStrankaComponent,
    //KnihyZoznamComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
