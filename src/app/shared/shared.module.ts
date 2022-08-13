import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, ButtonComponent, InfoComponent, SearchComponent } from './components';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

const DECLARATIONS = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent
]

const IMPORTS = [
  CommonModule,
  FontAwesomeModule
]

const EXPORTS = [...DECLARATIONS, ...IMPORTS];

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  exports: EXPORTS
})
export class SharedModule {

}

