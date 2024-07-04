import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCabinetComponent } from './user-cabinet/user-cabinet.component';
import { SharedModuleModule } from './shared/shared-module/shared.module';
import { AddEditContactComponent } from './components/add-edit-contact/add-edit-contact.component';
import { FullInfoComponent } from './components/full-info/full-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCabinetComponent,
    AddEditContactComponent,
    FullInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
