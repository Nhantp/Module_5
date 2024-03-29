import {Component, OnInit} from '@angular/core';
import {SongService} from '../service/song.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-youtuber-player',
  templateUrl: './youtuber-player.component.html',
  styleUrls: ['./youtuber-player.component.css']
})
export class YoutuberPlayerComponent implements OnInit {
  song: any;

  constructor(
    private songService: SongService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.song = this.songService.findSongById(id);
    });
  }

  getSrc() {
    const url = 'https://www.youtube.com/embed/' + this.song.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
