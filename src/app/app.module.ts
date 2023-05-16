import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { LoadConversationsEffect } from './store/effects/init-conversations.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('conversationsStore', reducers),
    EffectsModule.forRoot([
      LoadConversationsEffect
    ]),
    StoreDevtoolsModule.instrument({maxAge: 25, autoPause: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
