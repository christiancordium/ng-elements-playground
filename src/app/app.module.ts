import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    NavigationComponent,
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    NavigationComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(NavigationComponent, { injector: this.injector });

    customElements.define('navigation-view', el);
  }
}
