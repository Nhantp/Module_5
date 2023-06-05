import {Component, OnInit} from '@angular/core';
import {IWord} from '../model/iword';
import {ActivatedRoute} from '@angular/router';
import {DictionaryService} from '../service/dictionary-service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: IWord;

  constructor(
    private route: ActivatedRoute,
    private dictionaryService: DictionaryService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const word = params.get('word');
      if (word) {
        this.word = this.dictionaryService.translate(word);
      }
    });
  }
}
