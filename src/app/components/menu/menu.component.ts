import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { componentes } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

componentes:Observable<any[]>;

  constructor( private DataService:DataService) { }

  ngOnInit() {

    this.componentes=this.DataService.getMenuOpts();
  }

}
