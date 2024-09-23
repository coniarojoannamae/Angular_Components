import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {DisplayhelloworldComponent} from "./components/displayhelloworld/displayhelloworld.component";
import {ShowhellobuttonComponent} from "./components/showhellobutton/showhellobutton.component";

const routes: Routes = [
  {path: 'displayhelloworld', component: DisplayhelloworldComponent},
  {path: 'showhellobutton', component: ShowhellobuttonComponent},

];
 @NgModule({
   imports: [
     CommonModule,
     BrowserModule,
     BrowserAnimationsModule,
     ReactiveFormsModule,
     RouterModule.forRoot(routes, {enableTracing: true}),
     DisplayhelloworldComponent,
     // Only for debugging purposes
   ],

   exports: [RouterModule],
   declarations: [
     AppComponent,
     ShowhellobuttonComponent

   ],
   providers: [
     provideAnimationsAsync(),
   ],
   bootstrap: [AppComponent]
 })
export class AppModule {}
