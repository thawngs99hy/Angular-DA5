import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChucvusComponent } from './chucvus/chucvus.component';
import { ShowCvComponent } from './chucvus/show-cv/show-cv.component';
import { AddEditCvComponent } from './chucvus/add-edit-cv/add-edit-cv.component';
import { GiangviensComponent } from './giangviens/giangviens.component';
import { ShowGvComponent } from './giangviens/show-gv/show-gv.component';
import { AddEditGvComponent } from './giangviens/add-edit-gv/add-edit-gv.component';

import {SharedService} from './shared.service';

import{HttpClientModule} from '@angular/common/http';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UploadComponent } from './upload/upload.component';






@NgModule({
  declarations: [
    AppComponent,
    ChucvusComponent,
    ShowCvComponent,
    AddEditCvComponent,
    GiangviensComponent,
    ShowGvComponent,
    AddEditGvComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //modul/modul ung dung
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService], //ten dv vao NCC
  bootstrap: [AppComponent]
})
export class AppModule { }
