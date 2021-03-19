import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShipsService } from 'src/app/services/ships.service';
import { shipsState } from '../ships.reducer';
declare var $: any;

import * as fromShips from '../ships.action';


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  data$: Observable<any>;
  dataList: any;
  config: any;
  shipId: string = '';
  url: string = '';
  urlImg: string = 'https://starwars-visualguide.com/assets/img/starships/';
  
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';

  constructor( 
    private shipsService: ShipsService,
    private store : Store<shipsState>
  ) { 
    this.data$ = this.store.select('ship');
  }
  
  ngOnInit(): void {
    this.data$.subscribe((ships)=> {
      this.dataList = ships.ship;
    })
    
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
    };
  }

  setPageConfig(count){
    this.config["totalItems"] = count;
    return this.config;
  }

  getStarshipId(url) {
    this.shipId = url.replace(/^\D+|\D+$/g, "");
    const urlImage = `${this.urlImg}${this.shipId}.jpg`;
    return urlImage;
  }

  pageChanged(event){
    this.config.currentPage = event;
    this.shipsService.getShipsByPage(event).subscribe((ships) => {
      this.dataList = ships;
      this.store.dispatch(new fromShips.NewShips(ships));
    })
  }

  openDetails(details) {
    $("#exampleModal").modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class
  }

}
