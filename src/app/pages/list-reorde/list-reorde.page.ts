import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorde',
  templateUrl: './list-reorde.page.html',
  styleUrls: ['./list-reorde.page.scss'],
})
export class ListReordePage implements OnInit {
  personajes = ['Acuanman', 'superman', 'batman', 'flash', 'capamerica'];

  constructor() {}

  ngOnInit() {}

  reorder(event) {
   // console.log(event);
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
  }
  onClick(){
    console.log(this.personajes);
  }
}
