import { Component, OnInit } from '@angular/core';
import { City } from './model/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: City[] = [
    {
      Id: 1,
      Name: 'London',
      Employees: [
        {
          Id: 1,
          Name: 'Robert King',
          Position: 'Team Lead',
          Img: '../../assets/img/avtpng.png',
        },
        {
          Id: 2,
          Name: 'Michanel Suyama',
          Position: 'Developer',
          Img: '../../assets/img/avtpng.png',
        },
        {
          Id: 3,
          Name: 'Marganet Peacock',
          Position: 'Developer',
          Img: '../../assets/img/avtpng.png',
        }
      ],
    },
    {
      Id: 2,
      Name: 'Paris',
      Employees: [
        {
          Id: 5,
          Name: 'Robert King',
          Position: 'Team Lead',
          Img: '../../assets/img/avtpng.png',
        },
        {
          Id: 7,
          Name: 'Marganet Peacock',
          Position: 'Developer',
          Img: '../../assets/img/avtpng.png',
        },
        {
          Id: 6,
          Name: 'Michanel Suyama',
          Position: 'Developer',
          Img: '../../assets/img/avtpng.png',
        },
      ],
    },
    {
      Id: 3,
      Name: 'Rome',
      Employees: [
        {
          Id: 7,
          Name: 'Robert King',
          Position: 'Team Lead',
          Img: '../../assets/img/avtpng.png',
        },
        {
          Id: 9,
          Name: 'Marganet Peacock',
          Position: 'Developer',
          Img: '../../assets/img/avtpng.png',
        },
        {
          Id: 8,
          Name: 'Michanel Suyama',
          Position: 'Developer',
          Img: '../../assets/img/avtpng.png',
        },
      ],
    },
  ];

  title = 'ajs';
}
