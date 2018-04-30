import {Component, OnInit} from '@angular/core';
import {CharacterModel} from '../character.model';
import {CharacterService} from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: CharacterModel[] = [];

  constructor(private characterService: CharacterService) {
  }

  ngOnInit() {
    this.characterService.charactersChanged
      .subscribe(
        (characters: CharacterModel[]) => {
          this.characters = characters;
        }
      );
    console.log('initcharacterList');
    this.characterService.loadCharacters();
  }

}
