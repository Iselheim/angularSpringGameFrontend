import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {CharacterListComponent} from './character-list/character-list.component';

const characterRoutes: Routes = [
  {path: 'characterList', component: CharacterListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(characterRoutes)],
  exports: [RouterModule]
})

export class CharacterRoutingModule {

}
