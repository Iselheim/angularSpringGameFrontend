import {Component, OnInit} from '@angular/core';
import {CharacterModel} from '../character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: CharacterModel[] = [];

  constructor() {
  }

  ngOnInit() {
    this.characters.push(new CharacterModel(1, 'first name', 1));
    this.characters.push(new CharacterModel(2, 'second NAme', 2));
  }

}
