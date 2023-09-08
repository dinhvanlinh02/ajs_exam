import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { City } from './model/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  data: City[] = [
    {
      Id: 1,
      Name: 'Robert King',
      Position: 'Apology for late',
      Hello: 'Hello Colette Woote',
      Img: '../../assets/img/avtpng.png',
    },
    {
      Id: 2,
      Name: 'Michanel Suyama',
      Position: 'Application for job',
      Hello: 'Hello Kerry Best',
      Img: '../../assets/img/avtpng.png',
    },
    {
      Id: 3,
      Name: 'Marganet Peacock',
      Position: 'Anything i can help with',
      Hello: 'Hello Otto Ashley',
      Img: '../../assets/img/avtpng.png',
    },
    {
      Id: 1,
      Name: 'Robert King',
      Position: 'Apology for late',
      Hello: 'Hello Colette Woote',
      Img: '../../assets/img/avtpng.png',
    },
    {
      Id: 1,
      Name: 'Robert King',
      Position: 'Apology for late',
      Hello: 'Hello Colette Woote',
      Img: '../../assets/img/avtpng.png',
    },
    {
      Id: 1,
      Name: 'Robert King',
      Position: 'Apology for late',
      Hello: 'Hello Colette Woote',
      Img: '../../assets/img/avtpng.png',
    },
  ];

  title = 'ajs';
}
