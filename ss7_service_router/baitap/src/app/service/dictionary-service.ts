import {Injectable} from '@angular/core';
import {IWord} from '../model/iword';


@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: IWord[] = [{
    word: 'apple',
    mean: 'táo'
  }, {
    word: 'orange',
    mean: 'cam'
  }, {
    word: 'banana',
    mean: 'chuối'
  }, {
    word: 'mango',
    mean: 'xoài'
  }
  ];

  translate(word: string): IWord {
    const lowerCase = word.toLowerCase();
    return this.words.find((item) => item.word.toLowerCase() === lowerCase);
  }


  getAll(): IWord[] {
    return this.words;
  }

  constructor() {
  }
}
