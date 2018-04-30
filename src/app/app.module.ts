import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuardService} from './auth/auth-guard.service';
import {CoreModule} from './core/core.module';
import {AuthModule} from './auth/auth.module';
import {CharacterModule} from './character/character.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    AuthModule,
    CharacterModule,
    HttpClientModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
