import { Component } from '@angular/core';
import { homePageData } from 'src/data/homepage';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  data = homePageData
}
