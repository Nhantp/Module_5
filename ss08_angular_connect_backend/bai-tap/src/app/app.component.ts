import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bai-tap';
  showContent: boolean;

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
