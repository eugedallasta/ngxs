import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListarPostComponent } from './components/listar-post/listar-post.component';
import { NuevoPostComponent } from './components/nuevo-post/nuevo-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPostComponent,
    NuevoPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
