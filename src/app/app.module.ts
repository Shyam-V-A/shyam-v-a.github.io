import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageRecComponent } from './image-rec/image-rec.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { TranslateComponent } from './translate/translate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageRecComponent,
    TranslateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxJsonViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
