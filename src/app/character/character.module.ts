import {NgModule} from '@angular/core';

import {CharacterListComponent} from './character-list/character-list.component';
import {CharacterDetailsComponent} from './character-list/character-details/character-details.component';
import {CharacterEditComponent} from './character-list/character-edit/character-edit.component';
import {CharacterRoutingModule} from './character-routing.module';
import {CharacterService} from './character.service';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailsComponent,
    CharacterEditComponent
  ],
  imports: [
    CharacterRoutingModule,
    CommonModule
  ],
  providers: [CharacterService]
})
export class CharacterModule {
}
