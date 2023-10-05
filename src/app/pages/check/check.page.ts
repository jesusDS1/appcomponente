import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  data = [
    {
      name: 'dark',
      selected: false,
    },
    {
      name: 'danger',
      selected: true,
    },
    {
      name: 'dark',
      selected: false,
    },
    {
      name: 'primary',
      selected: true,
    },
  ];

  constructor() {}

  ngOnInit() {}

  onClick(check){
console.log(check);

  }
}
