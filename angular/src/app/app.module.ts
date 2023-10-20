import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HighlightDirective } from './components/directives/highlight.directive';
import { StructuralDirectivesComponent } from './components/directives/structural-directives/structural-directives.component';
import { UnlessDirective } from './components/directives/structural-directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    DirectivesComponent,
    HighlightDirective,
    StructuralDirectivesComponent,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
