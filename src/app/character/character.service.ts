import {Injectable} from '@angular/core';
import {CharacterModel} from './character.model';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CharacterService {

  charactersChanged = new Subject<CharacterModel[]>();

  private characters: CharacterModel[] = [];

  constructor(private httpClient: HttpClient) {
  }

  loadCharacters() {
    this.httpClient.get<CharacterModel[]>('http://localhost:8080/api/characters/')
      .subscribe(
      (chars) => {
        console.log(chars);
        this.setCharacters(chars);
      }
    );
  }

  private setCharacters(characters: CharacterModel[]) {
    this.characters = characters;
    this.charactersChanged.next(this.characters.slice());
  }

}
