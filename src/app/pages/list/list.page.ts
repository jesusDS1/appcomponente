import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('lista') lista:IonList;
  usuarios: Observable<any>;

  constructor(private DataService: DataService) {}

  ngOnInit() {
    this.usuarios = this.DataService.getUsers();
  }
  favorite(user) {
    console.log('favorite', user);
    this.lista.closeSlidingItems();
  }
  share(user) {
    console.log('share', user);
    this.lista.closeSlidingItems();
  }
  borrar(user) {
    console.log('borrar', user);
    this.lista.closeSlidingItems();
  }
}
