import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShipsService } from 'src/app/services/ships.service';
import { shipsState } from './ships.reducer';

import * as fromShips from './ships.action';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  constructor( 
    private shipsService: ShipsService,
    private store : Store<shipsState>
  ) {}

  ngOnInit(): void {
    this.shipsService.getShipsByPage(1).subscribe((ships) => {
      this.store.dispatch(new fromShips.NewShips(ships));
    })
  }

}
