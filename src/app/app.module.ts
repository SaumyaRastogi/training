import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentFormComponent } from './student-form/student-form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
// import { AppRoutingModule} from './app-routing.module';
import {RouterModule,Route} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    ReactiveformComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'reactiveform',
        component:ReactiveformComponent
      },
      {
        path:'template',
        component:StudentFormComponent
      }
    ])
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
