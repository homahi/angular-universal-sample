import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(meta: Meta) {
    meta.addTags([
      { property: "og:title", content: "Home page" },
      { property: "og:url", content: "http://angular.example.com" },
      { property: "og:site_name", content: "Angularデベロッパーズガイド" },
      { property: "og:description", content: "ホームページです" },
    ])
  }
}
